import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("admin_token")?.value;
  const pathname = request.nextUrl.pathname;

  if (!token && (pathname.startsWith("/adminAddProperty") || pathname.startsWith("/adminPropertyList"))) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (token && pathname === "/admin") {
    return NextResponse.redirect(new URL("/adminAddProperty", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/adminAddProperty/:path*", "/adminPropertyList/:path*"],
};
