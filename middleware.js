import { NextResponse } from "next/server";

export function componentName(req) {
  console.log(req);
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
