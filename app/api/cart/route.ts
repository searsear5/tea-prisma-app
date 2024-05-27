import { authOption } from "@/app/utils/authOption"
import { PrismaClient } from "@prisma/client"
import { create } from "domain"
import { Session } from "inspector"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"


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

export async function POST(request: Request) {
    const data = await getServerSession(authOption)
    const useremail = data?.user?.email
    if (useremail) {
        const datauser = await prisma.customer.findFirst({
            where: {

                email: useremail
            }
        })
        if (datauser?.customer_id) {



            const { quantity, teaname, description, price, image_url, type } = await request.json()

            const his = await prisma.orderHistory.create({
                data: {
                    quantity,
                    customerid: datauser.customer_id,
                    teaname,
                    description,
                    price,
                    image_url,
                    type,
                }
            })

            console.log("newhis", his)
            return Response.json(

                his

            )
        }
    }


}