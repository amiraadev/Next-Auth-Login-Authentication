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
                    },
                    password:{
                        label:"password",
                        type:"password",
                        placeholder:"password"
                    },
                  },
                  async authorize(credentials) {
                // This is where you need to retrieve user data to verify with the credentials 
                const user = {id:"42",name:"Dave",password:"nextauth"}
                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
                }
     })
    ]
};