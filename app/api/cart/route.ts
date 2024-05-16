import { PrismaClient } from "@prisma/client"
import { create } from "domain"
import { Session } from "inspector"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import { authOption } from "../auth/[...nextauth]/route"

const prisma = new PrismaClient()


export async function GET(
    request: Request

) {
    const user = await getServerSession(authOption)

    if (user?.user?.email) {
        const userId = await prisma.customer.findFirst({
            where: {
                email: user.user.email
            }
        })
        if (userId?.customer_id) {
            const data = await prisma.cart.findMany({
                where: {
                    customerid: userId.customer_id
                },
                include: {
                    tea: true
                }
            })
            return Response.json({
                status: 'success',
                data: data
            })
        }
    }



}