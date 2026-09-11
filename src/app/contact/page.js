"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReCaptcha from "@/components/Common/ReCaptcha";
import { Phone, Mail, MapPin } from "lucide-react";
import globalInfo from "@/data/globalInfo";

function ContactBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e1f5fe_0%,#ffffff_100%)]">
      {/* Background SVG overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
        style={{ backgroundImage: "url('https://funderama-llc.s3-eu-central-2.ionoscloud.com/blob-scene-wide-simple.svg')" }}
      />

      <div className="relative z-10 mx-auto flex w-[calc(100%-30px)] max-w-[1304px] flex-col justify-between py-12 sm:w-[calc(100%-48px)] sm:flex-row sm:items-center sm:py-[55px]">
        {/* Left: Divider line + Title */}
        <div className="flex items-center">
          <span className="mr-[15px] inline-block h-[20px] w-[3px] bg-[#00b0ff]/40" />
          <h1 className="font-['Rubik',sans-serif] text-[22px] font-normal leading-[1.4] text-[#183059]">
            Contact
          </h1>
        </div>

        {/* Right: Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mt-3 flex items-center font-['Rubik',sans-serif] text-[14px] font-normal text-[#183059] sm:mt-0"
        >
          <Link
            href="/"
            className="text-[#183059] underline underline-offset-2 transition-colors hover:no-underline"
          >
            Home
          </Link>
          <svg
            aria-hidden="true"
            className="mx-[10px] h-[10px] w-[10px] shrink-0 fill-[#00b0ff]/60"
            viewBox="0 0 320 512"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
          <span className="text-[#183059]">Contact</span>
        </nav>
      </div>
    </section>
  );
}

function ContactCards() {
  return (
    <section className="bg-white pt-12 pb-10 sm:pt-16 sm:pb-14">
      <div className="mx-auto w-[calc(100%-30px)] max-w-[1304px] sm:w-[calc(100%-48px)]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Card 1: Phone */}
          <div className="group flex flex-col items-center justify-center rounded-[12px] border border-[#eaedf1] bg-white p-8 text-center shadow-[0_4px_20px_rgba(20,47,126,0.06)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#cbd5e1] hover:shadow-[0_20px_40px_rgba(20,47,126,0.14)] sm:px-3 sm:py-7 md:px-4 md:py-8 lg:p-8 xl:p-10">
            <a
              href={`tel:${globalInfo.phoneRaw}`}
              className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f8fc] text-[#183059] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#183059] group-hover:text-[#F9E721]"
              aria-label="Call Customer Care"
            >
              <Phone className="h-7 w-7 stroke-current" strokeWidth={1.6} />
            </a>
            <h4 className="font-['Rubik',sans-serif] text-[20px] font-normal leading-tight text-[#183059] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[22px]">
              <a
                href={`tel:${globalInfo.phoneRaw}`}
                className="whitespace-nowrap text-[#183059] no-underline transition-colors hover:text-[#00b0ff]"
              >
                {globalInfo.phone}
              </a>
            </h4>
            <div className="mt-2.5 font-['Inter',sans-serif] text-[14px] text-[#8ba2b5]">
              Customer Care
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="group flex flex-col items-center justify-center rounded-[12px] border border-[#eaedf1] bg-white p-8 text-center shadow-[0_4px_20px_rgba(20,47,126,0.06)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#cbd5e1] hover:shadow-[0_20px_40px_rgba(20,47,126,0.14)] sm:px-3 sm:py-7 md:px-4 md:py-8 lg:p-8 xl:p-10">
            <a
              href={`mailto:${globalInfo.emailApply}`}
              className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f8fc] text-[#183059] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#183059] group-hover:text-[#F9E721]"
              aria-label="Email Support"
            >
              <Mail className="h-7 w-7 stroke-current" strokeWidth={1.6} />
            </a>
            <h4 className="w-full max-w-full font-['Rubik',sans-serif] text-[18px] font-normal leading-tight text-[#183059] sm:text-[13.5px] md:text-[15px] lg:text-[18px] xl:text-[20px]">
              <a
                href={`mailto:${globalInfo.emailApply}`}
                className="text-[#183059] no-underline transition-colors hover:text-[#00b0ff]"
              >
                {globalInfo.emailApply}
              </a>
            </h4>
            <div className="mt-2.5 font-['Inter',sans-serif] text-[14px] text-[#8ba2b5]">
              Support &amp; information
            </div>
          </div>

          {/* Card 3: Address */}
          <a
            href={globalInfo.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex cursor-pointer flex-col items-center justify-center rounded-[12px] border border-[#eaedf1] bg-white p-8 text-center no-underline shadow-[0_4px_20px_rgba(20,47,126,0.06)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#cbd5e1] hover:shadow-[0_20px_40px_rgba(20,47,126,0.14)] sm:px-3 sm:py-7 md:px-4 md:py-8 lg:p-8 xl:p-10"
          >
            <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f8fc] text-[#183059] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#183059] group-hover:text-[#F9E721]">
              <MapPin className="h-7 w-7 stroke-current" strokeWidth={1.6} />
            </div>
            <h4 className="max-w-[320px] font-['Rubik',sans-serif] text-[15px] font-normal uppercase leading-[1.5] text-[#183059] transition-colors group-hover:text-[#00b0ff] sm:text-[13.5px] md:text-[14px] lg:text-[16px]">
              {globalInfo.address.line1}
              <br />
              {globalInfo.address.line2}
            </h4>
            <div className="mt-2.5 font-['Inter',sans-serif] text-[14px] text-[#8ba2b5]">
              Office location
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError("Please verify that you are not a robot.");
      return;
    }
    if (formData.phone && formData.phone.length !== 10) {
      setServerError("Please enter a valid 10-digit phone number.");
      return;
    }
    setCaptchaError("");
    setServerError("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          captchaToken,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }
      // Instantly trigger website's official full-page loader
      const loaderEl = document.getElementById("load");
      if (loaderEl) {
        loaderEl.style.transition = "none";
        loaderEl.style.opacity = "1";
        loaderEl.style.visibility = "visible";
        loaderEl.style.pointerEvents = "auto";
      }
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
      router.push("/thank-you");
    } catch (err) {
      setServerError(err.message || "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <section className="bg-white pb-24 pt-4 sm:pb-32 sm:pt-6">
      <div className="mx-auto w-[calc(100%-30px)] max-w-[1304px] sm:w-[calc(100%-48px)]">
        {/* Headings */}
        <div className="text-center">
          <h2 className="font-['Rubik',sans-serif] text-[28px] font-normal text-[#183059] sm:text-[36px]">
            Feel Free to Contact Us
          </h2>
          <p className="mt-3 font-['Inter',sans-serif] text-[15px] text-[#546e7a] sm:text-[16px]">
            If you have any queries please connect with us.
          </p>
        </div>

        {/* Form Container */}
        <div className="mx-auto mt-10 max-w-[760px] sm:mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-['Rubik',sans-serif] text-[15px] font-normal text-[#183059]"
                >
                  Name <span className="text-[#183059]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                    setFormData({ ...formData, name: val });
                  }}
                  className="w-full rounded-[4px] border border-[#d6dee5] bg-[#fcfdfe] px-4 py-3 text-[15px] text-[#111827] outline-none transition placeholder:text-[#94a3b8] focus:border-[#183059] focus:bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-['Rubik',sans-serif] text-[15px] font-normal text-[#183059]"
                >
                  Email <span className="text-[#183059]">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-[4px] border border-[#d6dee5] bg-[#fcfdfe] px-4 py-3 text-[15px] text-[#111827] outline-none transition focus:border-[#183059] focus:bg-white"
                />
              </div>

              {/* Phone number */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block font-['Rubik',sans-serif] text-[15px] font-normal text-[#183059]"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  maxLength={10}
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

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-['Rubik',sans-serif] text-[15px] font-normal text-[#183059]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-y rounded-[4px] border border-[#d6dee5] bg-[#fcfdfe] px-4 py-3 text-[15px] text-[#111827] outline-none transition focus:border-[#183059] focus:bg-white"
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

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer rounded-[4px] bg-[#183059] py-3.5 text-center font-['Rubik',sans-serif] text-[16px] font-medium text-white transition hover:bg-[#233f75] disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
                {serverError && (
                  <p className="mt-3 text-center text-[15px] font-medium text-red-600">
                    {serverError}
                  </p>
                )}
              </div>
            </form>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <ContactBanner />
        <ContactCards />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
