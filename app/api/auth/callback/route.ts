import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    }
  );

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    return NextResponse.json(
      { error: tokenData.error_description },
      { status: 400 }
    );
  }

  const response =
    process.env.NODE_ENV === "production"
      ? NextResponse.redirect(
          `https://webteck.ca/admin/index.html#access_token=${tokenData.access_token}&token_type=bearer`
        )
      : NextResponse.redirect(
          `http://localhost:3000/admin/#access_token=${tokenData.access_token}&token_type=bearer`
        );

  // Set the required cookie for Decap CMS
  response.cookies.set({
    name: "nf_jwt",
    value: tokenData.access_token,
    path: "/",
    domain: "webteck.ca", // Explicit domain
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  return response;
}
