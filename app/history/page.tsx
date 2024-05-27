"use client"
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import ProductListtea from "../components/productListtea";
import ProductListpot from "../components/productListpot";
import ProductListcub from "../components/productListcub";
import { useRouter } from "next/navigation";
import Historyall from "../components/historyall";

type his = {
    customerid: number
    description: string
    image_url: string
    orderHistory_id: number
    price: number
    quantity: number
    teaname: string
    type: string
}
export default function history() {

    const { data: session, status } = useSession()

    const router = useRouter()

    const check = async () => {
        if (status === 'unauthenticated') {
            router.push('/home')
        }
    }

    const [hisall, setHisall] = useState<his[]>([])

    const calldata = async (): Promise<any> => {

        await check()

        const response = await axios.get('/api/history')
        const datares: any = response.data.data
        console.log("response", datares)

        setHisall(datares)






    }

    useEffect(() => {
        calldata()
    }, [])



    return (
        <main>
            <Navbar />
            <div>
                <Historyall data={hisall} />

            </div>
        </main>
    )
}