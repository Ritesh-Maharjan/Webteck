import { NextResponse } from "next/server";

export function GET(req: Request) {
  const referer = req.headers.get("referer") || req.headers.get("origin");
  console.log(referer);

  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo,user&redirect_uri=${encodeURIComponent(
    "https://webteck.ca/api/auth/callback"
  )}`;
  return NextResponse.redirect(githubAuthURL);
}
