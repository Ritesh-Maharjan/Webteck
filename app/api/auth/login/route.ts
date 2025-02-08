import { NextResponse } from "next/server";

export function GET() {
  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo,user&redirect_uri=${encodeURIComponent(
    "http://localhost:3000/api/auth/callback"
  )}`;
  return NextResponse.redirect(githubAuthURL);
}
