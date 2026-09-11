"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReCaptcha from "@/components/Common/ReCaptcha";
import { ChevronRight, Phone } from "lucide-react";

const loansFor = [
  "Convenience Stores",
  "Gas stations",
  "Grocery Stores",
  "Liquor Stores",
  "Pharmacies",
  "Trash Companies",
  "UPS store franchises",
  "Veterinary Clinics",
  "Wholesale distribution to Grocery / Convenience stores",
  "Others",
];

const typesOfLoans = [
  "Business Acquisition Loans",
  "Business Line Of Credit",
  "Business Loans For Women",
  "Commercial loans",
  "Equipment Financing",
  "Loans For Working Capital",
  "Merchant Cash Advance Loan",
  "Real Estate Financing",
  "Unsecured Loans",
  "Small Business Loans",
];

function QuickFinancingHero() {
  return (
    <>
      {/* Breadcrumb / Title Bar */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e1f5fe_0%,#ffffff_100%)]">
        {/* Background SVG overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
          style={{ backgroundImage: `url('https://funderama-llc.s3-eu-central-2.ionoscloud.com/blob-scene-wide-simple.svg')` }}
        />

        <div className="relative z-10 mx-auto flex w-[calc(100%-30px)] max-w-[1304px] flex-col justify-between py-12 sm:w-[calc(100%-48px)] sm:flex-row sm:items-center sm:py-[55px]">
          {/* Left: Divider line + Title */}
          <div className="flex items-center">
            <span className="mr-[15px] inline-block h-[20px] w-[3px] bg-[#00b0ff]/40" />
            <h1 className="font-['Rubik',sans-serif] text-[22px] font-normal leading-[1.4] text-[#183059]">
              Quick Financing
            </h1>
          </div>

          {/* Right: Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mt-3 flex items-center font-['Rubik',sans-serif] text-[14px] font-normal text-[#183059] sm:mt-0"
          >
            <a
              href="/"
              className="text-[#183059] underline underline-offset-2 transition-colors hover:no-underline"
            >
              Home
            </a>
            <svg
              aria-hidden="true"
              className="mx-[10px] h-[10px] w-[10px] shrink-0 fill-[#00b0ff]/60"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
            <span className="text-[#183059]">Quick Financing</span>
          </nav>
        </div>
      </section>

      {/* 2-Column Loans Section */}
      <section className="bg-white pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto w-[calc(100%-30px)] max-w-[1304px] sm:w-[calc(100%-48px)]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Column 1: Loans For */}
            <div>
              <h2 className="mb-[40px] font-['Rubik',sans-serif] text-[30px] font-normal leading-[1.3] text-[#183059] sm:text-[36px]">
                Loans For
              </h2>
              <ul className="space-y-[15px]">
                {loansFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[9px] font-['Inter',sans-serif] text-[18px] font-medium leading-[1.6em] text-[#000000]"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-[16px] w-[10px] shrink-0 fill-[#183059]"
                      viewBox="0 0 320 512"
                    >
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Types of Loans */}
            <div>
              <h2 className="mb-[40px] font-['Rubik',sans-serif] text-[30px] font-normal leading-[1.3] text-[#183059] sm:text-[36px]">
                Types of Loans
              </h2>
              <ul className="space-y-[15px]">
                {typesOfLoans.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[9px] font-['Inter',sans-serif] text-[18px] font-medium leading-[1.6em] text-[#263238]"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-[16px] w-[10px] shrink-0 fill-[#183059]"
                      viewBox="0 0 320 512"
                    >
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function QuickFinancingInfo() {
  return (
    <section className="bg-white px-4 pb-20 pt-4 sm:px-6 sm:pb-28 sm:pt-6">
      <div className="mx-auto grid max-w-[1304px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        {/* Left Column: Heading + Paragraphs */}
        <div className="order-2 w-full lg:order-1 lg:max-w-[580px]">
          <h2 className="mb-[30px] font-['Rubik',sans-serif] text-[30px] font-normal leading-[1.3] text-[#183059] sm:text-[36px]">
            Quick Financing
          </h2>
          <div className="space-y-5 text-justify text-base leading-[1.7] text-[#5d7788] sm:text-[18px]">
            <p>
              Arranging funds during a financial crisis or unexpected expenses would be challenging because of lengthy procedures and paperwork. But in the digital generation getting a quick loan in such a financial crisis, gathering funds becomes easy.
            </p>
            <p>
              During such circumstances, getting instant money as a loan can be a better choice to fill such a financial gap and to fulfill only essential requirements.
            </p>
            <p>
              Quick financing is a quick way to get a short-term loan from the lender as an emergency fund, which can be repaid after 14 to 30 days of borrowing on the borrower&apos;s next payday. The repayment terms of these loans are flexible and are dependent on the lenders, such as Funderama LLC itself!! Availing money from such loans is very easy as they do not require collateral assets, and you get a quick loan on just filling an application form.
            </p>
            <p>
              Since quick loans do not involve any assets and are short term, the lender may increase the interest rate more than the regular interest rate. And also, the loan is approved even if one has a low or bad credit score.
            </p>
            <p>
              While taking a quick loan, make sure you genuinely need emergency cash and not fulfill your desires.
            </p>
          </div>
        </div>

        {/* Right Column: Masked Image & Blob Decorations */}
        <div className="order-1 relative flex min-h-[300px] w-full items-center justify-center overflow-visible sm:min-h-[420px] md:min-h-[460px] lg:order-2 lg:min-h-[580px]">
          <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px] lg:h-[540px] lg:w-[540px]">
            {/* Light blue background blob (top-right) */}
            <img
              src="https://funderama-llc.s3-eu-central-2.ionoscloud.com/sqr031-col1.svg"
              alt=""
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full origin-center opacity-30 [transform:translate(14%,-14%)_scale(0.68)] lg:[transform:translate(18%,-18%)_scale(0.85)]"
            />
            {/* Clipped photo */}
            <img
              src="https://funderama-llc.s3-eu-central-2.ionoscloud.com/quick-financing.jpeg"
              alt="Quick Financing cash exchange"
              className="absolute inset-0 z-[2] h-full w-full object-cover"
              style={{
                WebkitMaskImage: "url(/images/sqr031-col1.svg)",
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: "url(/images/sqr031-col1.svg)",
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
            {/* Dark slate-blue accent blob (bottom-left) */}
            <img
              src="https://funderama-llc.s3-eu-central-2.ionoscloud.com/shape-3.svg"
              alt=""
              className="pointer-events-none absolute inset-0 z-[3] h-full w-full origin-center opacity-55 [transform:translate(-32%,32%)_scale(0.25)] lg:[transform:translate(-30%,26%)_scale(0.36)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultationSection() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError("Please verify that you are not a robot.");
      return;
    }
    if (formData.phone.length !== 10) {
      setServerError("Please enter a valid 10-digit phone number.");
      return;
    }
    setCaptchaError("");
    setServerError("");
    setLoading(true);

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          pageSource: "Quick Financing",
          captchaToken,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }
      setSubmitted(true);
      setFormData({ name: "", phone: "" });
      setCaptchaToken(null);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setServerError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-16">
      <div className="mx-auto grid max-w-[1304px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left Column: Image & Blobs */}
        <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-visible sm:min-h-[420px] md:min-h-[460px] lg:min-h-[580px]">
          <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px] lg:h-[560px] lg:w-[560px]">
            {/* Light blue background blob (top-right) */}
            <img
              src="https://funderama-llc.s3-eu-central-2.ionoscloud.com/sqr031-col1.svg"
              alt=""
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full origin-center opacity-30 [transform:translate(14%,-14%)_scale(0.68)] lg:[transform:translate(18%,-18%)_scale(0.85)]"
            />
            {/* Clipped photo */}
            <img
              src="https://funderama-llc.s3-eu-central-2.ionoscloud.com/free-consultation.jpeg"
              alt="Financial consultation"
              className="absolute inset-0 z-[2] h-full w-full object-cover"
              style={{
                WebkitMaskImage: "url(/images/sqr031-col1.svg)",
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: "url(/images/sqr031-col1.svg)",
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
            {/* Dark slate-blue accent blob (bottom-left) */}
            <img
              src="https://funderama-llc.s3-eu-central-2.ionoscloud.com/shape-3.svg"
              alt=""
              className="pointer-events-none absolute inset-0 z-[3] h-full w-full origin-center opacity-55 [transform:translate(-32%,32%)_scale(0.25)] lg:[transform:translate(-30%,26%)_scale(0.36)]"
            />
          </div>
        </div>

        {/* Right Column: Heading & Form */}
        <div className="mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none lg:pl-8 xl:pl-10">
          <h2 className="text-center font-['Rubik',sans-serif] text-[30px] font-normal leading-[1.3] text-[#183059] sm:text-[36px] lg:text-left">
            Get free consultation now!
          </h2>
          <div className="mx-auto mb-9 mt-4 h-[1.5px] w-[95px] bg-[#293039]/40 lg:mx-0" />

          {submitted ? (
            <div className="rounded-[8px] border border-green-200 bg-green-50 p-7 text-center transition-all duration-300">
              <h3 className="font-['Rubik',sans-serif] text-[19px] font-medium text-green-800">
                Thank you!
              </h3>
              <p className="mt-2 text-[14px] text-green-700">
                Your request has been received. Our representative will call you back shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="consult-name"
                  className="mb-2 block text-sm font-normal text-[#293039]"
                >
                  Name <span className="text-[#e11d48]">*</span>
                </label>
                <input
                  type="text"
                  id="consult-name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                    setFormData({ ...formData, name: val });
                  }}
                  className="w-full rounded-[4px] border border-[#d6dee5] bg-[#fcfdfe] px-4 py-3 text-[15px] text-[#111827] outline-none transition focus:border-[#183059] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="consult-phone"
                  className="mb-2 block text-sm font-normal text-[#293039]"
                >
                  Phone number <span className="text-[#e11d48]">*</span>
                </label>
                <input
                  type="tel"
                  id="consult-phone"
                  name="phone"
                  required
                  maxLength={10}
                  minLength={10}
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: val });
                  }}
                  className="w-full rounded-[4px] border border-[#d6dee5] bg-[#fcfdfe] px-4 py-3 text-[15px] text-[#111827] outline-none transition focus:border-[#183059] focus:bg-white"
                />
              </div>

              {/* reCAPTCHA */}
              <div>
                <ReCaptcha
                  onChange={(token) => {
                    setCaptchaToken(token);
                    if (token) setCaptchaError("");
                  }}
                  onExpired={() => setCaptchaToken(null)}
                />
                {captchaError && (
                  <p className="mt-1 text-sm font-medium text-red-600">
                    {captchaError}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-h-[50px] w-full items-center justify-center gap-3 rounded-[4px] bg-[#192f5a] px-6 py-3.5 text-base font-medium text-white transition hover:bg-[#233f75] disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
                >
                  <Phone className="h-4 w-4 fill-white stroke-none" />
                  <span>{loading ? "Submitting..." : "Request a call-back"}</span>
                </button>
                {serverError && (
                  <p className="mt-3 text-center text-sm font-medium text-red-600">
                    {serverError}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function QuickFinancingPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <QuickFinancingHero />
        <QuickFinancingInfo />
        <ConsultationSection />
      </main>
      <Footer />
    </>
  );
}

