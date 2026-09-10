import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CheckCircle2, ArrowRight, Phone, Mail, Clock, Home } from "lucide-react";
import globalInfo from "@/data/globalInfo";

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-[#f8fafc]">
        {/* Banner Section */}
        <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e1f5fe_0%,#ffffff_100%)]">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
            style={{ backgroundImage: "url('/images/blob-scene-wide-simple.svg')" }}
          />

          <div className="relative z-10 mx-auto flex w-[calc(100%-30px)] max-w-[1304px] flex-col justify-between py-10 sm:w-[calc(100%-48px)] sm:flex-row sm:items-center sm:py-[45px]">
            <div className="flex items-center">
              <span className="mr-[15px] inline-block h-[20px] w-[3px] bg-[#00b0ff]/40" />
              <h1 className="font-['Rubik',sans-serif] text-[22px] font-normal leading-[1.4] text-[#183059]">
                Thank You
              </h1>
            </div>

            <nav aria-label="Breadcrumb" className="mt-4 sm:mt-0">
              <ol className="flex items-center space-x-2 text-xs text-[#546e7a]">
                <li>
                  <Link href="/" className="transition hover:text-[#183059]">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/contact" className="transition hover:text-[#183059]">
                    Contact
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium text-[#183059]" aria-current="page">
                  Thank You
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[760px] text-center">
            {/* Success Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-sm ring-8 ring-green-50">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h2 className="font-['Rubik',sans-serif] text-[32px] font-medium leading-[1.25] text-[#183059] sm:text-[40px]">
              Thank You for Reaching Out!
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] font-['Inter',sans-serif] text-base leading-relaxed text-[#546e7a] sm:text-lg">
              Your inquiry has been successfully submitted. One of our dedicated funding specialists will review your details and contact you shortly.
            </p>

            {/* Quick Info Badges */}
            <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
              {/* Card 1: Fast Response */}
              <div className="group flex items-start gap-3.5 rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-[0_2px_10px_rgba(20,47,126,0.04)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-[#00b0ff]/40 hover:shadow-[0_14px_30px_rgba(24,48,89,0.12)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f8fc] text-[#183059] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#183059] group-hover:text-[#eed900]">
                  <Clock className="h-5 w-5 stroke-current" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-['Rubik',sans-serif] text-sm font-medium text-[#183059] transition-colors group-hover:text-[#00b0ff]">Fast Response</h4>
                  <p className="mt-0.5 text-xs text-[#64748b]">Usually within 24 business hours</p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <a
                href={`tel:${globalInfo.phoneRaw}`}
                className="group flex cursor-pointer items-start gap-3.5 rounded-xl border border-[#e2e8f0] bg-white p-5 text-left no-underline shadow-[0_2px_10px_rgba(20,47,126,0.04)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-[#00b0ff]/40 hover:shadow-[0_14px_30px_rgba(24,48,89,0.12)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f8fc] text-[#183059] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#183059] group-hover:text-[#eed900]">
                  <Phone className="h-5 w-5 stroke-current" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-['Rubik',sans-serif] text-sm font-medium text-[#183059] transition-colors group-hover:text-[#00b0ff]">Need Quick Help?</h4>
                  <span className="mt-0.5 block text-xs font-medium text-[#0284c7] group-hover:underline">
                    {globalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Card 3: Email */}
              <a
                href={`mailto:${globalInfo.emailApply}`}
                className="group flex cursor-pointer items-start gap-3.5 rounded-xl border border-[#e2e8f0] bg-white p-5 text-left no-underline shadow-[0_2px_10px_rgba(20,47,126,0.04)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-[#00b0ff]/40 hover:shadow-[0_14px_30px_rgba(24,48,89,0.12)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f8fc] text-[#183059] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#183059] group-hover:text-[#eed900]">
                  <Mail className="h-5 w-5 stroke-current" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-['Rubik',sans-serif] text-sm font-medium text-[#183059] transition-colors group-hover:text-[#00b0ff]">Direct Email</h4>
                  <span className="mt-0.5 block text-xs font-medium text-[#0284c7] group-hover:underline">
                    {globalInfo.emailApply}
                  </span>
                </div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[5px] bg-[#183059] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#233f75] sm:w-auto"
              >
                <Home className="h-4 w-4" />
                <span>Back to Homepage</span>
              </Link>
              <Link
                href="/quick-financing"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[5px] border border-[#d6dee5] bg-white px-7 py-3 text-sm font-medium text-[#183059] transition hover:border-[#183059] hover:bg-[#f8fafc] sm:w-auto"
              >
                <span>Explore Financing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
