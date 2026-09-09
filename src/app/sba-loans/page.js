"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReCaptcha from "@/components/Common/ReCaptcha";
import { MapPin, Mail, Phone } from "lucide-react";

function SBALoansBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e1f5fe_0%,#ffffff_100%)]">
      {/* Background SVG overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
        style={{ backgroundImage: `url('/images/blob-scene-wide-simple.svg')` }}
      />

      <div className="relative z-10 mx-auto flex w-[calc(100%-30px)] max-w-[1304px] flex-col justify-between py-12 sm:w-[calc(100%-48px)] sm:flex-row sm:items-center sm:py-[55px]">
        {/* Left: Divider line + Title */}
        <div className="flex items-center">
          <span className="mr-[15px] inline-block h-[20px] w-[3px] bg-[#00b0ff]/40" />
          <h1 className="font-['Rubik',sans-serif] text-[22px] font-normal leading-[1.4] text-[#183059]">
            SBA Loans
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
          <span className="text-[#183059]">SBA Loans</span>
        </nav>
      </div>
    </section>
  );
}

function SBALoansHero() {
  return (
    <section className="bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8">
      <div className="mx-auto grid max-w-[1304px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        {/* Left Column: Masked Photo & Blob Decorations */}
        <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-visible sm:min-h-[420px] md:min-h-[460px] lg:min-h-[580px]">
          <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px] lg:h-[540px] lg:w-[540px]">
            {/* Light blue background blob (top-right) */}
            <img
              src="/images/sqr031-col1.svg"
              alt=""
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full origin-center opacity-30 [transform:translate(14%,-14%)_scale(0.68)] lg:[transform:translate(18%,-18%)_scale(0.85)]"
            />
            {/* Clipped photo */}
            <img
              src="/images/sba-loans.jpeg"
              alt="SBA Loans exchange"
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
              src="/images/shape-3.svg"
              alt=""
              className="pointer-events-none absolute inset-0 z-[3] h-full w-full origin-center opacity-55 [transform:translate(-32%,32%)_scale(0.25)] lg:[transform:translate(-30%,26%)_scale(0.36)]"
            />
          </div>
        </div>

        {/* Right Column: Heading & Content */}
        <div className="max-w-[580px]">
          <h2 className="mb-6 font-['Rubik',sans-serif] text-[30px] font-normal leading-[1.3] text-[#183059] sm:text-[36px]">
            SBA Loans
          </h2>
          <div className="space-y-4 text-justify text-base leading-[1.7] text-[#5d7788] sm:text-[18px]">
            <p>
              Suppose you are in the United States and have a small business or enterprise owner or start a small business. In that case, you need money for inventory, for capital, for funding purposes to feed and grow your business.
            </p>
            <p>
              Then you might need a loan from the Small Business Administration.
            </p>
          </div>

          <h3 className="mb-4 mt-8 font-['Rubik',sans-serif] text-[28px] font-normal leading-[1.3] text-[#183059] sm:text-[32px]">
            What is SBA?
          </h3>
          <div className="space-y-4 text-justify text-base leading-[1.7] text-[#5d7788] sm:text-[18px]">
            <p>
              Small Business Administration, which is abbreviated as SBA, is a government-approved agency that helps small business owners provide loans from their authorized money lending partners.
            </p>
            <p>
              SBA aids small business owners in maintaining and strengthen the economy of the United States.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsSBALoanSection() {
  return (
    <section className="bg-white px-4 pb-20 pt-4 sm:px-6 sm:pb-24 sm:pt-6">
      <div className="mx-auto max-w-[1304px]">
        <h2 className="mb-8 font-['Rubik',sans-serif] text-[30px] font-normal leading-[1.3] text-[#183059] sm:text-[36px]">
          What is an SBA loan?
        </h2>
        <div className="space-y-5 text-justify text-base leading-[1.7] text-[#5d7788] sm:text-[18px]">
          <p>
            The SBA agency has various lending partners, including banks that provide loans for different business purposes.
          </p>
          <p>
            For the most general purposes in business, a program is available, known as the 7(a) Loan Program. This program is generally for basic business needs, including inventory purchasing, capital, expansion, and purchasing new land.
          </p>
          <p>
            SBA also helps small businesses expand and export abroad and in underserved rural markets.
          </p>
          <p>
            SBA is a most desired loan program that offers lower down payments and flexibility with longer terms than other financing options.
          </p>
          <p>
            To become eligible for getting a 7(a) Loan Program, a business should be done for profits, have equity, and have personal assets to apply for a loan.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSectionSBA() {
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError("Please verify that you are not a robot.");
      return;
    }
    setCaptchaError("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-[1304px]">
        {/* Contact Info Cards */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {/* Card 1: Address */}
          <div className="flex flex-col items-center rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] p-6 text-center transition hover:border-[#cbd5e1] hover:shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ff] text-[#183059]">
              <MapPin className="h-5 w-5" />
            </div>
            <h4 className="font-['Rubik',sans-serif] text-lg font-medium text-[#183059]">
              Corporate Office
            </h4>
            <span className="text-sm font-normal text-[#7a8a99]">New York, NY</span>
          </div>

          {/* Card 2: Email */}
          <div className="flex flex-col items-center rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] p-6 text-center transition hover:border-[#cbd5e1] hover:shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ff] text-[#183059]">
              <Mail className="h-5 w-5" />
            </div>
            <h4 className="font-['Rubik',sans-serif] text-lg font-medium text-[#183059]">
              <a href="mailto:apply@funderamallc.com" className="hover:underline">
                apply@funderamallc.com
              </a>
            </h4>
            <span className="text-sm font-normal text-[#7a8a99]">Drop us a line</span>
          </div>

          {/* Card 3: Phone */}
          <div className="flex flex-col items-center rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] p-6 text-center transition hover:border-[#cbd5e1] hover:shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f7ff] text-[#183059]">
              <Phone className="h-5 w-5" />
            </div>
            <h4 className="font-['Rubik',sans-serif] text-lg font-medium text-[#183059]">
              <a href="tel:+18779912355" className="hover:underline">
                +1-877-991-2355
              </a>
            </h4>
            <span className="text-sm font-normal text-[#7a8a99]">Have any questions?</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="font-['Rubik',sans-serif] text-[30px] font-normal leading-[1.3] text-[#183059] sm:text-[36px]">
            Feel Free to Contact Us
          </h2>
          <div className="mx-auto mb-9 mt-4 h-[1.5px] w-[95px] bg-[#293039]/40" />

          {submitted ? (
            <div className="rounded-[8px] border border-green-200 bg-green-50 p-7 text-center">
              <h3 className="font-['Rubik',sans-serif] text-[19px] font-medium text-green-800">
                Thank you!
              </h3>
              <p className="mt-2 text-[14px] text-green-700">
                Your request has been received. Our representative will call you back shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setCaptchaToken(null);
                }}
                className="mt-5 inline-block cursor-pointer rounded-[4px] bg-[#183059] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#233f75]"
              >
                Request another call-back
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label
                  htmlFor="sba-name"
                  className="mb-2 block text-sm font-normal text-[#293039]"
                >
                  Name <span className="text-[#e11d48]">*</span>
                </label>
                <input
                  type="text"
                  id="sba-name"
                  name="name"
                  required
                  className="w-full rounded-[4px] border border-[#d6dee5] bg-[#fcfdfe] px-4 py-3 text-[15px] text-[#111827] outline-none transition focus:border-[#183059] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="sba-phone"
                  className="mb-2 block text-sm font-normal text-[#293039]"
                >
                  Phone number <span className="text-[#e11d48]">*</span>
                </label>
                <input
                  type="tel"
                  id="sba-phone"
                  name="phone"
                  required
                  pattern="[0-9()#+*\-=. ]+"
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

              <button
                type="submit"
                className="flex min-h-[50px] w-full items-center justify-center gap-3 rounded-[4px] bg-[#192f5a] px-6 py-3.5 text-base font-medium text-white transition hover:bg-[#233f75] active:scale-[0.99]"
              >
                <Phone className="h-4 w-4 fill-white stroke-none" />
                <span>Request a call-back</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function SBALoansPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <SBALoansBanner />
        <SBALoansHero />
        <WhatIsSBALoanSection />
        <ContactSectionSBA />
      </main>
      <Footer />
    </>
  );
}
