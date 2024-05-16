import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    try {
        const { username, userpass, name, lastname, email, address, phone } = await request.json()
        const hashPassword = bcrypt.hashSync(userpass, 10)
        const newUser = await prisma.customer.create({
            data: {
                username,
                userpass: hashPassword,
                name,
                lastname,
                email,
                address,
                phone

            }
        })
        return Response.json({
            message: 'create user success',
            data: {
                newUser
            }
        })
    }
    catch (error) {
        return Response.json({
            error
        }, { status: 500 })
    }
}