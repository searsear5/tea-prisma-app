import { authOption } from "@/app/components/authoption"
import NextAuth from "next-auth/next"


const handler = NextAuth(authOption)

export { handler as GET, handler as POST, authOption }

//export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOption);