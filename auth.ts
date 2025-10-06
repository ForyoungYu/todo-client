import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
// import Resend from "next-auth/providers/resend";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import client from "./lib/db";
// import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: MongoDBAdapter(client),
  providers: [
    GitHub,
    // Resend,
    // Credentials({
    //   credentials: {
    //     email: {},
    //     password: {}
    //   },
    //   authorize: async (credential) => {

    //     return null;
    //   }
    // })
  ],
});
