import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface SessionData {
    id: string;
    fullname: string;
    avatar?: string;
  }
  interface Session extends DefaultSession {
    user: {
      id: string;
      fullname: string;
      avatar?: string;
    } & DefaultSession["user"];
    data?: {
      id: string;
      fullname: string;
      avatar?: string;
    };
  }
}
