import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware is now a pass-through - all routes are publicly accessible
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
