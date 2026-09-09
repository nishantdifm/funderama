"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Banknote, BriefcaseBusiness, Phone } from "lucide-react";

const assets = {
  heroImage: "/images/customer-centric-lending-solutions.jpeg",
  imageMask: "/images/sqr012-col1.svg",
  blueShape: "/images/sqr012-col1.svg",
  accentShape: "/images/shape-1.svg",
};

const services = [
  { title: "Quick Financing", href: "#financing", Icon: Banknote },
  { title: "SBA Loans", href: "#sba", Icon: BriefcaseBusiness },
];

function HeroSection() {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[linear-gradient(160deg,#e4f7ff_0%,#e8f8ff_43.5%,white_43.6%)] sm:min-h-[736px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_42%_70%_at_-7%_76%,#e2f6fe_0_50%,transparent_50.4%),linear-gradient(62deg,transparent_0_70%,rgba(209,241,252,.6)_70.1%)]" />
      <div className="mx-auto grid min-h-[650px] w-[calc(100%-30px)] max-w-[1304px] grid-cols-1 items-center py-20 sm:min-h-[736px] sm:w-[calc(100%-48px)] lg:grid-cols-[45%_55%] lg:py-0">
        <div className="max-w-[580px]">
          <p className="mb-[28px] font-['Rubik',sans-serif] text-[24px] font-normal tracking-[-0.4px] text-black sm:text-[32px]">welcome to FunderamaLLC</p>
          <h1 className="mb-[28px] font-['Rubik',sans-serif] text-[40px] font-semibold leading-[1.18] tracking-[0.1px] text-[#183059] sm:text-[48px]">Customer-centric<br />lending solutions</h1>
          <p className="m-0 mb-[36px] text-justify text-base leading-[1.6] tracking-[0.1px] text-[#5d7788] sm:text-[18px]">At FunderamaLLC, our focus is towards the customers gaining an upper hand on business financing deals. Making the right choices and being able to get the right kind of merchant cash advance or an SBA loan. Unlike other lenders and brokers, we focus on our clients benefits when it comes to offering the right lending solution. Our customers are provided with the custom loan solutions that can be altered as per their business needs.</p>
          <a className="inline-flex min-h-[56px] items-center rounded-[5px] bg-[#192f5a] px-[27px] text-base font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#24427c]" href="#contact">Make an appointment</a>
        </div>
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
            <a className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-white px-8 shadow-[0_0_20px_rgba(20,47,126,.13)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,47,126,.18)]" href={service.href} key={service.title}>
              <service.Icon className="h-10 w-10 text-[#1d3968]" strokeWidth={2.5} aria-hidden="true" />
              <h3 className="mt-8 text-[32px] font-normal text-[#293039]">{service.title}</h3>
            </a>
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
    <section className="bg-white px-4 pb-20 pt-6 sm:px-6 sm:pb-28 sm:pt-10">
      <div className="mx-auto grid max-w-[1304px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <div className="max-w-[560px]">
          <h3 className="m-0 mb-4 font-['Rubik',sans-serif] text-[28px] font-normal leading-[1.3] text-black sm:text-[36px] sm:leading-[46.8px]">
            Our motto
          </h3>
          <h2 className="mb-6 font-['Rubik',sans-serif] text-[36px] font-bold leading-[1.17] tracking-[0.1px] text-[#1d3968] sm:text-[46px]">
            every BIG business <br />
            starts SMALL
          </h2>
          <p className="m-0 text-justify text-base leading-[1.6] tracking-[0.1px] text-[#5d7788] sm:text-[18px]">
            At FunderamaLLC, we are focused towards providing each small and medium
            sized business the boost that they may need to expand their existing
            business. Whether is (it) be an (a) cash flow problem, payroll problem,
            expansion funds needed, or even if you are looking to buy expensive
            equipment that can increase your revenue, we will ensure that you are
            served with all the right options for your merchant cash advance or your
            SBA loan!
          </p>
        </div>

        <div className="relative flex min-h-[380px] w-full items-center justify-center overflow-visible sm:min-h-[480px] lg:min-h-[600px]">
          <div className="relative h-[340px] w-[340px] sm:h-[480px] sm:w-[480px] lg:h-[580px] lg:w-[580px]">
            {/* Light blue background blob */}
            <img
              src={mottoAssets.blueShape}
              alt=""
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full origin-center opacity-30 [transform:translate(-12%,-14%)_scale(0.85)]"
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
            {/* Foreground dark slate-blue accent blob */}
            <img
              src={mottoAssets.accentShape}
              alt=""
              className="pointer-events-none absolute inset-0 z-[3] h-full w-full origin-center opacity-55 [transform:translate(22%,26%)_scale(0.36)]"
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
  return (
    <section id="contact" className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-[1304px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left Column: Masked Image & Blobs */}
        <div className="relative flex min-h-[380px] w-full items-center justify-center overflow-visible sm:min-h-[480px] lg:min-h-[580px]">
          <div className="relative h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px]">
            {/* Light blue background blob (top-right) */}
            <img
              src={contactAssets.blueShape}
              alt=""
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full origin-center opacity-30 [transform:translate(10%,-15%)_scale(0.85)]"
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
              className="pointer-events-none absolute inset-0 z-[3] h-full w-full origin-center opacity-55 [transform:translate(-30%,26%)_scale(0.36)]"
            />
          </div>
        </div>

        {/* Right Column: Heading & Form */}
        <div className="mx-auto w-full max-w-[540px] lg:mx-0 lg:pl-6">
          <h2 className="mb-8 font-['Rubik',sans-serif] text-[30px] font-medium leading-[1.3] text-[#183059] sm:text-[36px]">
            Feel Free to Contact Us with<br />Any Questions
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
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

            <button
              type="submit"
              className="flex min-h-[50px] w-full items-center justify-center gap-3 rounded-[4px] bg-[#192f5a] px-6 py-3.5 text-base font-medium text-white transition hover:bg-[#233f75] active:scale-[0.99]"
            >
              <Phone className="h-4 w-4 fill-white stroke-none" />
              <span>Request a call-back</span>
            </button>
          </form>
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
          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center justify-center rounded-[5px] bg-[#192f5a] px-8 py-3.5 text-base font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#233f75] active:scale-[0.99]"
          >
            Apply for Funding Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main id="home">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MottoSection />
      <ContactSection />
      <WhyChooseSection />
      <Footer />
    </main>
  );
}
