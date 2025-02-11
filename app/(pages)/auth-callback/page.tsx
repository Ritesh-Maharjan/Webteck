import AuthCallbackPage from "@/_component/AuthCallback";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <AuthCallbackPage />
    </Suspense>
  );
}
