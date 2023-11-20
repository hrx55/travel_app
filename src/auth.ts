import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth } = NextAuth({
  providers: [GitHub, GoogleProvider],
});
