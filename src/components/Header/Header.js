import Logo from "./Logo";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Quick Financing", href: "#financing" },
  { label: "SBA Loans", href: "#sba" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <>
      <div className="h-auto border-b border-[#dbe2e7] py-2 text-[13px] text-[#233c66] sm:h-[39px] sm:py-0">
        <div className="mx-auto flex h-full w-[calc(100%-30px)] max-w-[1304px] items-start justify-between sm:w-[calc(100%-48px)] sm:items-center">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-[30px]">
            <span>Customer Care : <a className="underline underline-offset-2" href="tel:+18779912355">+1-877-991-2355</a></span>
            <span><b>Email:</b> <a className="underline underline-offset-2" href="mailto:apply@funderamallc.com">apply@funderamallc.com</a></span>
          </div>
          <label className="hidden h-full w-[180px] items-center gap-3 border-x border-[#dbe2e7] px-[19px] sm:flex">
            <input className="w-full border-0 text-[#31496b] outline-none placeholder:text-[#7991a5]" placeholder="Search..." aria-label="Search" />
            <svg className="w-[17px] fill-none stroke-[#7791a7] stroke-2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></svg>
          </label>
        </div>
      </div>
      <header className="sticky top-0 z-50 h-[94px] border-b border-[#e5e7eb] bg-white sm:h-[120px]">
        <div className="mx-auto flex h-full w-[calc(100%-30px)] max-w-[1304px] items-center justify-between sm:w-[calc(100%-48px)]">
          <Logo />
          <nav className="flex max-w-[220px] flex-wrap justify-end gap-x-[15px] gap-y-[9px] sm:max-w-none sm:flex-nowrap sm:items-center sm:gap-8" aria-label="Main navigation">
            {navigation.map(({ label, href }) => <a className={"text-xs font-semibold text-[#293039] no-underline hover:text-[#eed900] sm:text-base " + (label === "Home" ? "text-[#eed900]" : "")} href={href} key={label}>{label}</a>)}
          </nav>
        </div>
      </header>
    </>
  );
}
