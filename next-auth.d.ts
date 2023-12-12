import NextAuth from "next-auth/next";
declare module "next-auth/" {
  interface UserData {
    id: string;
    fullname: string;
    avatar?: string;
  }
  interface Session {
    data: UserData;
  }
}
