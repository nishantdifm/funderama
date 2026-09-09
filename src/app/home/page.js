"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReCaptcha from "@/components/Common/ReCaptcha";
import { Banknote, BriefcaseBusiness, Phone } from "lucide-react";

const assets = {
  heroImage: "/images/customer-centric-lending-solutions.jpeg",
  imageMask: "/images/sqr012-col1.svg",
  blueShape: "/images/sqr012-col1.svg",
  accentShape: "/images/shape-1.svg",
};

const services = [
  { title: "Quick Financing", href: "/quick-financing", Icon: Banknote },
  { title: "SBA Loans", href: "/sba-loans", Icon: BriefcaseBusiness },
];

function HeroSection() {
  const scrollToContact = (e) => {
    e?.preventDefault?.();
    const el = document.getElementById("contact");
    if (el) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 120;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[linear-gradient(160deg,#e4f7ff_0%,#e8f8ff_43.5%,white_43.6%)] sm:min-h-[736px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_42%_70%_at_-7%_76%,#e2f6fe_0_50%,transparent_50.4%),linear-gradient(62deg,transparent_0_70%,rgba(209,241,252,.6)_70.1%)]" />
      <div className="mx-auto grid min-h-[650px] w-[calc(100%-30px)] max-w-[1304px] grid-cols-1 items-center gap-10 py-12 sm:min-h-[736px] sm:w-[calc(100%-48px)] sm:py-20 lg:grid-cols-[45%_55%] lg:gap-0 lg:py-0">
        <div className="max-w-[580px] text-left">
          <p className="mb-3 font-['Rubik',sans-serif] text-[22px] font-normal leading-[1.3] text-[#293039] sm:mb-4 sm:text-[32px]">
            welcome to FunderamaLLC
          </p>
          <h1 className="mb-4 font-['Rubik',sans-serif] text-[36px] font-bold leading-[1.17] tracking-[0.1px] text-[#1d3968] sm:mb-6 sm:text-[54px]">
            Customer-centric <br />
            lending solutions
          </h1>
          <p className="mb-8 text-justify text-[15px] leading-[1.6] tracking-[0.1px] text-[#5d7788] sm:text-[18px]">
            At FunderamaLLC, our focus is towards the customers gaining an upper
            hand on business financing deals. Making the right choices and being
            able to get the right kind of merchant cash advance or an SBA loan.
            Unlike other lenders and brokers, we focus on our clients benefits
            when it comes to offering the right lending solution. Our customers
            are provided with the custom loan solutions that can be altered as per
            their business needs.
          </p>
          <div className="flex justify-start">
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex min-h-[50px] cursor-pointer items-center justify-center rounded-[4px] bg-[#183059] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#22447d] active:scale-[0.99]"
            >
              Make an appointment
            </button>
          </div>
        </div>

        {/* Mobile & iPad Hero Image */}
        <div className="relative flex w-full items-center justify-center overflow-visible py-4 sm:py-8 lg:hidden">
          <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px]">
            {/* Light blue background blob (top-left) */}
            <img
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full origin-center opacity-30 [transform:translate(-15%,-12%)_scale(0.70)]"
              src={assets.blueShape}
              alt=""
            />
            {/* Clipped photo */}
            <img
              className="absolute inset-0 z-[2] h-full w-full object-cover"
              src={assets.heroImage}
              alt="Customer-centric lending solutions"
              style={{
                WebkitMaskImage: `url(${assets.imageMask})`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: `url(${assets.imageMask})`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
            {/* Dark accent blob (bottom-right) */}
            <img
              className="pointer-events-none absolute inset-0 z-[3] h-full w-full origin-center opacity-55 [transform:translate(30%,22%)_scale(0.25)]"
              src={assets.accentShape}
              alt=""
            />
          </div>
        </div>

        {/* Desktop Original Hero Image */}
        <div className="relative hidden h-[675px] overflow-visible lg:block">
          <img className="absolute left-0 top-0 z-[1] w-[1000px] origin-center opacity-25 [transform:translate(-20%,-11%)_scale(.6)]" src={assets.blueShape} alt="" />
          <img className="absolute right-[-10px] top-[18px] z-[2] h-[680px] w-[680px] object-cover [transform:translateX(4%)_scale(.9)]" src={assets.heroImage} alt="Business owner holding a tablet" style={{ WebkitMaskImage: `url(${assets.imageMask})`, WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat", WebkitMaskSize: "contain", maskImage: `url(${assets.imageMask})`, maskPosition: "center", maskRepeat: "no-repeat", maskSize: "contain" }} />
          <img className="absolute left-0 top-0 z-[3] w-[1000px] origin-center opacity-50 [transform:translate(33%,18%)_scale(.33)]" src={assets.accentShape} alt="" />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-[88px] sm:px-6 sm:py-[110px]">
      <div className="mx-auto max-w-[1304px]">
        <h2 className="mb-[62px] text-center text-[36px] font-semibold leading-tight text-[#1d3968]">Our Services</h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {services.map((service) => (
            <Link className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-white px-8 shadow-[0_0_20px_rgba(20,47,126,.13)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,47,126,.18)]" href={service.href} key={service.title}>
              <service.Icon className="h-10 w-10 text-[#1d3968]" strokeWidth={2.5} aria-hidden="true" />
              <h3 className="mt-8 text-[32px] font-normal text-[#293039]">{service.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const mottoAssets = {
  image: "/images/big-business-starts-small.jpeg",
  imageMask: "/images/sqr021-col1.svg",
  blueShape: "/images/sqr021-col1.svg",
  accentShape: "/images/shape-2.svg",
};

function MottoSection() {
  return (
    <section className="bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-28 sm:pt-10">
      <div className="mx-auto grid max-w-[1304px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <div className="order-2 mx-auto max-w-[560px] text-center lg:order-1 lg:mx-0 lg:text-left">
          <h3 className="m-0 mb-3 font-['Rubik',sans-serif] text-[24px] font-normal leading-[1.3] text-black sm:mb-4 sm:text-[36px] sm:leading-[46.8px]">
            Our motto
          </h3>
          <h2 className="mb-5 font-['Rubik',sans-serif] text-[30px] font-bold leading-[1.17] tracking-[0.1px] text-[#1d3968] sm:mb-6 sm:text-[46px]">
            every BIG business <br />
            starts SMALL
          </h2>
          <p className="m-0 text-justify text-[15px] leading-[1.6] tracking-[0.1px] text-[#5d7788] sm:text-[18px]">
            At FunderamaLLC, we are focused towards providing each small and medium
            sized business the boost that they may need to expand their existing
            business. Whether is (it) be an (a) cash flow problem, payroll problem,
            expansion funds needed, or even if you are looking to buy expensive
            equipment that can increase your revenue, we will ensure that you are
            served with all the right options for your merchant cash advance or your
            SBA loan!
          </p>
        </div>

        <div className="order-1 relative flex w-full items-center justify-center overflow-visible py-4 sm:py-6 lg:order-2 lg:min-h-[600px] lg:py-0">
          <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px] lg:h-[580px] lg:w-[580px]">
            {/* Light blue background blob (top-left) */}
            <img
              src={mottoAssets.blueShape}
              alt=""
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full origin-center opacity-30 [transform:translate(-15%,-12%)_scale(0.70)] lg:[transform:translate(-12%,-14%)_scale(0.85)]"
            />
            {/* Clipped photo */}
            <img
              src={mottoAssets.image}
              alt="Small business owner smiling with open sign"
              className="absolute inset-0 z-[2] h-full w-full object-cover"
              style={{
                WebkitMaskImage: `url(${mottoAssets.imageMask})`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: `url(${mottoAssets.imageMask})`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
            {/* Foreground dark slate-blue accent blob (bottom-right) */}
            <img
              src={mottoAssets.accentShape}
              alt=""
              className="pointer-events-none absolute inset-0 z-[3] h-full w-full origin-center opacity-55 [transform:translate(24%,28%)_scale(0.25)] lg:[transform:translate(22%,26%)_scale(0.36)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const contactAssets = {
  image: "/images/free-consultation.jpeg",
  imageMask: "/images/sqr031-col1.svg",
  blueShape: "/images/sqr031-col1.svg",
  accentShape: "/images/shape-3.svg",
};

function ContactSection() {
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
    <section id="contact" className="scroll-mt-[94px] bg-white px-4 py-12 sm:scroll-mt-[120px] sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-[1304px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left Column: Masked Image & Blobs */}
        <div className="relative flex w-full items-center justify-center overflow-visible py-4 sm:py-6 lg:min-h-[580px] lg:py-0">
          <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px] lg:h-[540px] lg:w-[540px]">
            {/* Light blue background blob (top-right) */}
            <img
              src={contactAssets.blueShape}
              alt=""
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full origin-center opacity-30 [transform:translate(14%,-14%)_scale(0.68)] lg:[transform:translate(10%,-15%)_scale(0.85)]"
            />
            {/* Clipped photo */}
            <img
              src={contactAssets.image}
              alt="Financial consulting team analyzing business charts"
              className="absolute inset-0 z-[2] h-full w-full object-cover"
              style={{
                WebkitMaskImage: `url(${contactAssets.imageMask})`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskImage: `url(${contactAssets.imageMask})`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
            {/* Dark slate-blue accent blob (bottom-left) */}
            <img
              src={contactAssets.accentShape}
              alt=""
              className="pointer-events-none absolute inset-0 z-[3] h-full w-full origin-center opacity-55 [transform:translate(-32%,32%)_scale(0.25)] lg:[transform:translate(-30%,26%)_scale(0.36)]"
            />
          </div>
        </div>

        {/* Right Column: Heading & Form */}
        <div className="mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none lg:pl-6">
          <h2 className="mb-8 text-center font-['Rubik',sans-serif] text-[28px] font-medium leading-[1.3] text-[#183059] sm:text-[36px] lg:text-left">
            Feel Free to Contact Us with<br />Any Questions
          </h2>

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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-normal text-[#293039]"
                >
                  Name <span className="text-[#e11d48]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className="w-full rounded-[4px] border border-[#d6dee5] bg-[#fcfdfe] px-4 py-3 text-[15px] text-[#111827] outline-none transition focus:border-[#183059] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-normal text-[#293039]"
                >
                  Phone number <span className="text-[#e11d48]">*</span>
                </label>
                <input
                  type="tel"
                  id="contact-phone"
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

function WhyChooseSection() {
  return (
    <section className="bg-white px-4 pb-20 pt-6 sm:px-6 sm:pb-28 sm:pt-10">
      <div className="mx-auto max-w-[1000px] text-center">
        <h2 className="mb-6 font-['Rubik',sans-serif] text-[30px] font-medium leading-[1.3] text-[#183059] sm:text-[36px]">
          Why Choose Funderama LLC
        </h2>

        <div className="mx-auto mb-10 max-w-[880px] space-y-3 text-base leading-[1.6] text-[#5d7788] sm:text-[18px]">
          <p className="m-0">
            At <strong className="font-semibold text-[#293039]">FunderamaLLC</strong>, we make business funding simple, fast, and transparent — helping entrepreneurs secure capital when it matters most.
          </p>
          <p className="m-0">
            Whether you&apos;re expanding, upgrading, or managing cash flow, we&apos;re here to help your business grow with confidence.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[52px] cursor-pointer items-center justify-center rounded-[5px] bg-[#192f5a] px-8 py-3.5 text-base font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#233f75] active:scale-[0.99]"
          >
            Apply for Funding Today
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="home" className="overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <MottoSection />
        <ContactSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </>
  );
}
