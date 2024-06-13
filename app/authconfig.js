// import { getUserByEmail } from "./lib/data";
// const {getUserByEmail} = require('./lib/data')
export const authConfig = {
  providers:[],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      // console.log('role from authconfig', {auth})
      // const userByEmail = await getUserByEmail(auth.user.email)
      // console.log({userByEmail})

      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};
