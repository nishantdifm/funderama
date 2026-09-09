import Link from "next/link";

export default function Logo() {
  return (
    <Link className="flex h-[94px] w-[150px] items-center sm:h-[120px] sm:w-[185px]" href="/" aria-label="Funderama home">
      <img
        className="h-auto w-full object-contain"
        src="/images/fundrama-logo.png"
        alt="Funderama"
      />
    </Link>
  );
}
