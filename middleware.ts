import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    "/meeting",
    "/"
  ]
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", 
    "/", 
    "/(api|trpc)(.*)",
  ]
};
