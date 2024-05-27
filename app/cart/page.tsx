"use client"
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";

import { useRouter } from "next/navigation";
import Allitem from "../components/allitem";

type cart = {
    cartid: number
    customerid: number
    teaid: number
    quantity: number
    sumprice: number
    tea: {
        description: string
        image_url: string
        price: number
        tea_id: number
        teaname: string
        type: string
    }
}

export default function Cart({ params }: { params: { id: string } }) {
    const { id } = params

    const { data: session, status } = useSession()

    const router = useRouter()

    const [allitem, setAllitem] = useState<cart[]>([])


    const check = async () => {
        if (status === 'unauthenticated') {
            router.push('/home')
        }
    }

    const calldata = async (): Promise<any> => {

        await check()

        const rescart = await axios.get(`/api/cart`)
        const datacart: any = rescart.data.data
        console.log("rescart", datacart)



        setAllitem(datacart)


    }





    useEffect(() => {
        calldata()
    }, [])

    return (
        <main>
            <Navbar />
            <div>CART {id}</div>
            <div><Allitem allitem={allitem} /></div>

        </main>

    );
}
