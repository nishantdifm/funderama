const MAX_ATTEMPTS = 5;
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes in ms
const BLOCK_MS = 30 * 60 * 1000; // 30 minutes in ms

// Global in-memory cache to preserve state across dev reloads without any database table
if (!globalThis.__rateLimitStore) {
  globalThis.__rateLimitStore = new Map();
}
// Clear any legacy un-prefixed keys so local testing is unblocked immediately
for (const key of Array.from(globalThis.__rateLimitStore.keys())) {
  if (!key.startsWith("callback:") && !key.startsWith("contact:")) {
    globalThis.__rateLimitStore.delete(key);
  }
}
const rateLimitStore = globalThis.__rateLimitStore;

// Clean up stale entries every 10 minutes to prevent memory leaks
if (!globalThis.__rateLimitCleanupInterval) {
  const interval = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      if (record.blockedUntil && record.blockedUntil > now) {
        continue; // keep active block
      }
      if (now - record.firstAttemptAt > WINDOW_MS && (!record.blockedUntil || record.blockedUntil <= now)) {
        rateLimitStore.delete(key);
      }
    }
  }, 10 * 60 * 1000);
  if (typeof interval.unref === "function") {
    interval.unref();
  }
  globalThis.__rateLimitCleanupInterval = interval;
}

/**
 * Extracts client IP address from Next.js request headers
 */
export function getClientIp(request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) {
      return forwardedFor.split(",")[0].trim();
    }
    const realIp = request.headers.get("x-real-ip");
    if (realIp) {
      return realIp.trim();
    }
  } catch {
    // fallback
  }
  return "127.0.0.1";
}

/**
 * Checks and updates rate limits in-memory for a given identifier (email, phone, or IP).
 * Rule: Max 5 requests within 5 minutes. If reached, blocks for 30 minutes.
 *
 * @param {string} rawIdentifier - Email, phone, or IP
 * @returns {Promise<{ allowed: boolean, error?: string, remainingMinutes?: number }>}
 */
export async function checkRateLimit(rawIdentifier) {
  if (!rawIdentifier) return { allowed: true };
  const identifier = String(rawIdentifier).trim().toLowerCase();
  const now = Date.now();

  const record = rateLimitStore.get(identifier);

  // 1. First attempt: register new record
  if (!record) {
    rateLimitStore.set(identifier, {
      attempts: 1,
      firstAttemptAt: now,
      blockedUntil: null,
    });
    return { allowed: true };
  }

  // 2. Check if currently blocked
  if (record.blockedUntil && now < record.blockedUntil) {
    const remainingMinutes = Math.ceil((record.blockedUntil - now) / (60 * 1000));
    return {
      allowed: false,
      error: "Too many requests. Please try again after some time.",
      remainingMinutes,
    };
  }

  // 3. Check if 5-minute sliding window has expired
  if (now - record.firstAttemptAt > WINDOW_MS) {
    rateLimitStore.set(identifier, {
      attempts: 1,
      firstAttemptAt: now,
      blockedUntil: null,
    });
    return { allowed: true };
  }

  // 4. Within 5-minute window: increment attempts
  record.attempts += 1;

  if (record.attempts >= MAX_ATTEMPTS) {
    record.blockedUntil = now + BLOCK_MS;
    return {
      allowed: false,
      error: "Too many requests. Please try again after some time.",
      remainingMinutes: 30,
    };
  }

  return { allowed: true };
}
