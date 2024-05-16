import { PrismaClient } from "@prisma/client"
import { create } from "domain"
import { Session } from "inspector"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"


const prisma = new PrismaClient()

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const delId = Number(params.id)
    const deletecart = await prisma.cart.delete({
        where: { cartid: delId }
    })
    return Response.json(deletecart)
}