import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
    GitHubProvider({
        clientId: String(process.env.GITHUB_CLIENT_ID),
        clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
      }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };