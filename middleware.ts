import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in", 
    "/sign-up",
    "/api/owners/register"
  ],
  ignoredRoutes: []
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/api/owners/register',
    '/(api|trpc)(.*)'
  ],
}; 