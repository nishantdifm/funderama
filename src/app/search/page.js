"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchResultsPage from "@/components/Search/SearchResultsPage";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("s") ?? "";

  return <SearchResultsPage query={query} />;
}

export default function SearchRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <SearchContent />
    </Suspense>
  );
}

