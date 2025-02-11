"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const access_token = searchParams.get("access_token");

  if (access_token && typeof window !== "undefined") {
    // Only execute on the client-side
    window.opener.postMessage({ access_token: access_token }, "*");
    window.close();
  }

  return (
    <div>
      <h2>Redirecting...</h2>
    </div>
  );
}
