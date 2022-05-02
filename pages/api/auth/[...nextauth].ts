import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // 1つ以上の認証プロバイダーを構成
  providers: [
    //複数のプロバイダをここに追加していく
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return Promise.resolve({
        ...session,
        //id: user.idでsessionの中身にidの情報を含ませる
        user: {
          ...session.user,
          id: user.id,
        },
      });
    },
  },
  secret: "secret",
});
