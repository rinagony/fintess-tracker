import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import connectDB from '../../../../../../server/config/db'
import User from '../../../../../../server/models/User'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_ID_SECRET
    })
  ],
  callbacks: {
    async session({session}) {
      const sessionUser = await User.findOne({email: session.user.email})
      session.user.id = sessionUser._id
      return session
    },
    async signIn({profile}) {
      try {
        await connectDB()
        const userExist = await User.findOne({email: profile.email})

        if(!userExist) {
          await User.create({
            name: profile.name,
            email: profile.email,
            image: profile.picture,
            
        })
        }
        return true
      } catch(err) {
        console.log(err)
        return false
      }
    }
  },
  secret: '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'
})

export { handler as GET, handler as POST}