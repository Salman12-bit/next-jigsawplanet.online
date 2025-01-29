import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(req, event) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isAuthenticated = !!token;
    const userRole = token?.role || null;

    const protectedRoutes = [
        "/contact",
    ];


    // const protectedRoutes = [
    //     "/contact",
    //     "/jigsaw-planet",
    //     "/freezenova",
    //     "/gametheme",
        
    // ];

    const url = req.nextUrl.clone();

    if ((url.pathname === "/sign-in" || url.pathname === "/sign-up") && isAuthenticated) {
        url.pathname = "/";
        return NextResponse.redirect(url);
    }

    if (protectedRoutes.includes(url.pathname) && !isAuthenticated) {
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
    }

    if (url.pathname.startsWith("/post-article")) {
        if (!isAuthenticated) {
            url.pathname = "/sign-in";
            return NextResponse.redirect(url);
        } else if (userRole !== "admin") {
            url.pathname = "/";
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/post-article/:path*", "/sign-in", "/sign-up","/contact"],
};



// matcher: ["/dashboard/:path*", "/login", "/register", "/contact", "/jigsaw-planet", "/freezenova", "/gametheme", "/"],

