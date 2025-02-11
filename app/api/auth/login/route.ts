import { NextResponse } from "next/server";

export function GET() {
  const redirectUri = "https://webteck.ca/api/auth/callback";

  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo,user&redirect_uri=${encodeURIComponent(redirectUri)}`;

  return NextResponse.redirect(githubAuthURL);
}
