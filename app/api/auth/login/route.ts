import { NextResponse } from "next/server";

export function GET() {
  const redirectUri =
    process.env.NODE_ENV === "production"
      ? "https://webteck.ca/api/auth/callback"
      : "http://localhost:3000/api/auth/callback";

  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo,user&redirect_uri=${encodeURIComponent(redirectUri)}`;

  console.log("Mic test");

  return NextResponse.redirect(githubAuthURL);
}
