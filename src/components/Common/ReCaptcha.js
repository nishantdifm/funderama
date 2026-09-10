"use client";

import { useEffect, useRef, useState } from "react";

export default function ReCaptcha({
  onChange,
  onExpired,
  onError,
  className = "",
}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use user's env key or fallback to Google's official public test key
  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  useEffect(() => {
    let isMounted = true;

    const renderWidget = () => {
      if (
        !isMounted ||
        !containerRef.current ||
        !window.grecaptcha ||
        !window.grecaptcha.render
      ) {
        return;
      }

      if (widgetIdRef.current !== null) return;

      try {
        const id = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => {
            if (onChange) onChange(token);
          },
          "expired-callback": () => {
            if (onExpired) onExpired();
            if (onChange) onChange(null);
          },
          "error-callback": () => {
            if (onError) onError();
            if (onChange) onChange(null);
          },
        });
        widgetIdRef.current = id;
        setIsLoaded(true);
      } catch (e) {
        // Suppress re-render error if already initialized
      }
    };

    if (window.grecaptcha && window.grecaptcha.render) {
      renderWidget();
    } else {
      let script = document.getElementById("google-recaptcha-script");
      if (!script) {
        script = document.createElement("script");
        script.id = "google-recaptcha-script";
        script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }

      const checkInterval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          clearInterval(checkInterval);
          renderWidget();
        }
      }, 100);

      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
      }, 10000);

      return () => {
        isMounted = false;
        clearInterval(checkInterval);
        clearTimeout(timeout);
      };
    }

    return () => {
      isMounted = false;
    };
  }, [siteKey]);

  return (
    <div className={`my-2 flex flex-col items-start overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="origin-left scale-[0.88] transition-transform sm:scale-100"
      />
    </div>
  );
}

