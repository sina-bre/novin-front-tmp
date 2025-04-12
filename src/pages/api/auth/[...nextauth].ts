import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import {
  IGeneralData,
  TLoginMain,
  TLoginPayload,
  TLoginResponseData,
} from '@/interfaces';
import { fetcher } from '@/lib';

declare module 'next-auth' {
  interface User {
    token: string;
  }
  interface Session {
    userId: string;
    userToken: string;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        mobile: { label: 'Phone Number', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const loginPayload: Readonly<TLoginPayload> = {
          mobile: credentials.mobile,
          password: credentials.password,
        };
        const loginData = await fetcher<
          IGeneralData<TLoginResponseData>,
          TLoginPayload
        >({
          url: `/api/login`,
          method: 'POST',
          payload: loginPayload,
        });
        if (!loginData.data) return null;
        return {
          id: loginData.data.token,
          token: loginData.data.token,
        };
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.userToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.userId = token.userId as string;
      session.userToken = token.userToken as string;
      return session;
    },
  },
});
