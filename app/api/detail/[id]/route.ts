import { authOption } from "@/app/utils/authOption"
import { PrismaClient } from "@prisma/client"
import { create } from "domain"
import { Session } from "inspector"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"

const prisma = new PrismaClient()


export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const paramID = Number(params.id)
    const data = await prisma.tea.findFirst({
        where: {
            tea_id: paramID
        }
    })

    return Response.json({
        status: 'success',
        data: data
    })
}



export async function POST(request: Request,
    { params }: { params: { id: string } }) {
    const data = await getServerSession(authOption)
    const paramID = Number(params.id)
    const useremail = data?.user?.email
    if (useremail) {
        console.log("email", useremail)
        const datauser = await prisma.customer.findFirst({
            where: {

                email: useremail
            }
        })
        console.log("username", datauser?.username)


        if (datauser?.customer_id) {
            const { quantity, sumprice } = await request.json()
            const newCart = await prisma.cart.create({
                data: {
                    quantity,
                    customerid: datauser?.customer_id,
                    teaid: paramID,
                    sumprice
                    //้องเอา token มากำหนดค่า customerid
                }
            })
            console.log("newCart", newCart)
            return Response.json(

                newCart

            )
        }



    }
}
