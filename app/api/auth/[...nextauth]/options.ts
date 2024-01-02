import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
                  name: 'Credentials',
                  credentials: {
                    username:{
                        label:"Username",
                        type:"text",
                        placeholder:"cool username"
                    }
                  },
                  async authorize(credentials) {
                // This is where you need to retrieve user data to verify with the credentials 
                })
    ]
};