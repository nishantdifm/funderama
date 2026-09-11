"use client";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function PrivacyBanner() {
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
            Privacy Policy
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
          <span className="text-[#183059]">Privacy Policy</span>
        </nav>
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PrivacyBanner />

        <article className="mx-auto w-[calc(100%-30px)] max-w-[1304px] py-12 sm:w-[calc(100%-48px)] sm:py-16">
          <div className="space-y-6 font-['Inter',sans-serif] text-[15px] sm:text-[16px] leading-[1.8] text-[#546e7a]">
            {/* INTRODUCTION */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                INTRODUCTION
              </h2>
              <p>
                Funderama LLC (website URL address:{" "}
                <Link
                  href="/"
                  className="text-[#00b0ff] underline underline-offset-2 transition hover:text-[#183059]"
                >
                  https://funderamallc.com/
                </Link>
                ) appreciates your business and trust. We are a company based in [insert location], dedicated to providing exceptional services. Please read this Privacy Policy, providing consent to both documents in order to have permission to use our services.
              </p>
            </div>

            {/* DATA COLLECTED */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                DATA COLLECTED
              </h2>
            </div>

            {/* DATA STORAGE LOCATION */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                DATA STORAGE LOCATION
              </h2>
              <p>
                We are a [insert location] based company and operate web servers hosted in [insert location/country]. Our hosting provider adheres to [mention any compliance standards followed]. For more information on our hosting provider’s privacy policy, please see [hosting provider’s privacy policy link].
              </p>
            </div>

            {/* REGISTRATION DATA */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                REGISTRATION DATA
              </h2>
              <p>
                If you register on our website, we store your chosen username, email address, and any additional personal information added to your user profile. You can see, edit, or delete your personal information at any time (except changing your username). Website administrators can also see and edit this information.
              </p>
            </div>

            {/* PURCHASE DATA */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                PURCHASE DATA
              </h2>
              <p>
                To receive product support, you may be required to provide certain purchase information. This information is securely stored and is used solely for the purpose of providing you with the necessary support and services.
              </p>
            </div>

            {/* SUPPORT DATA */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                SUPPORT DATA
              </h2>
              <p>
                If you reach out to us for support, your inquiries and any provided information are securely stored for the purpose of assisting you effectively.
              </p>
            </div>

            {/* COMMENTS */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                COMMENTS
              </h2>
              <p>
                When you leave comments on the website, we collect the data shown in the comments form, along with the IP address and browser user agent string, to help spam detection.
              </p>
            </div>

            {/* CONTACT FORM */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                CONTACT FORM
              </h2>
              <p>
                Information submitted through the contact form on our site is sent to our company email. These submissions are only kept for customer service purposes and are never used for marketing purposes or shared with third parties.
              </p>
            </div>

            {/* CONSENT CHOICE */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                CONSENT CHOICE
              </h2>
              <p>
                We provide you with the choice to accept this or not. Consent boxes are presented for all data-collecting forms, and no data is transferred before you consent.
              </p>
            </div>

            {/* COOKIES */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                COOKIES
              </h2>
              <p>
                This site uses cookies to provide a better user experience. You may choose to disable cookies in your browser settings, although this may affect your browsing experience.
              </p>
            </div>

            {/* WHO HAS ACCESS TO YOUR DATA */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                WHO HAS ACCESS TO YOUR DATA
              </h2>
              <p>
                Your data is accessible only to authorized personnel who require it to provide you with the requested services or support.
              </p>
            </div>

            {/* THIRD-PARTY ACCESS TO YOUR DATA */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                THIRD-PARTY ACCESS TO YOUR DATA
              </h2>
              <p>
                We do not share your data with third parties, except in cases where it is necessary for providing you with the services you expect from us. Please see our third-party providers’ privacy policies for more information.
              </p>
            </div>

            {/* HOW LONG WE RETAIN YOUR DATA */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                HOW LONG WE RETAIN YOUR DATA
              </h2>
              <p>
                We retain your data only for as long as necessary to provide you with the requested services or support. You may request the removal of your data at any time.
              </p>
            </div>

            {/* SECURITY MEASURES */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                SECURITY MEASURES
              </h2>
              <p>
                We employ security measures, including encryption protocols, to ensure the integrity and confidentiality of your data.
              </p>
            </div>

            {/* YOUR DATA RIGHTS */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                YOUR DATA RIGHTS
              </h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data stored by us. However, certain data may be retained for administrative, legal, or security purposes.
              </p>
            </div>

            {/* AMENDMENTS */}
            <div>
              <h2 className="mb-2 font-['Rubik',sans-serif] text-[15px] sm:text-[16px] font-bold uppercase tracking-wide text-[#183059]">
                AMENDMENTS
              </h2>
              <p>
                We may amend this Privacy Policy from time to time. When we do so, we will update this page accordingly and require your consent to the amendments in order to continue using our services.
              </p>
            </div>

            {/* Footer Consent & Date */}
            <div className="pt-2">
              <p>By using our services, you consent to the terms outlined in this Privacy Policy.</p>
              <p className="mt-2 text-sm text-[#7a8b9e]">[Last Updated: 22/03/2024]</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
