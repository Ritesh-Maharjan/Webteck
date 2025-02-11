"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthCallbackPage() {
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Client-side only code
    const access_token = searchParams.get("access_token");

    if (access_token && window.opener) {
      window.opener.postMessage({ access_token }, "*");
      window.close();
    } else {
      setIsLoading(false);
    }
  }, [searchParams]);

  if (isLoading) {
    return <h2>Redirecting...</h2>;
  }

  return (
    <div>
      <h2>Authentication Failed</h2>
      <p>Could not complete authentication. Please try again.</p>
    </div>
  );
}
