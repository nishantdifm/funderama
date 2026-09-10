"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import HomePage from "./home/page";
import SearchResultsPage from "@/components/Search/SearchResultsPage";

function PageSwitcher() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const s = searchParams.get("s");

  useEffect(() => {
    if (s !== null) {
      router.replace(`/search?s=${encodeURIComponent(s)}`);
    }
  }, [s, router]);

  if (s !== null) {
    return <SearchResultsPage query={s} />;
  }

  return <HomePage />;
}

export default function RootPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PageSwitcher />
    </Suspense>
  );
}
