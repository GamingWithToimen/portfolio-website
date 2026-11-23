import { NextResponse, type NextRequest } from "next/server";
import { hasLocale, pickLocale } from "@/i18n/config";

// Redirect "/" and any path without a language prefix to the visitor's
// preferred language, e.g. /portfolio -> /nl/portfolio.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (hasLocale(first)) return;

  const locale = pickLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next.js internals and anything with a file extension (images, favicon)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
