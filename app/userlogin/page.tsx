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
export default function Userlogin() {

    const { data: session, status } = useSession()

    const router = useRouter()
    type teatype = {
        description: string
        image_url: string
        price: number
        tea_id: number
        teaname: string
        type: string

    }

    const [data, setData] = useState<teatype[]>([])

    const check = async () => {
        if (status === 'unauthenticated') {
            router.push('/home')
        }
    }

    const calldata = async (): Promise<any> => {

        await check()

        const response = await axios.get('http://localhost:3000/api/home')
        const datares: any = response.data.data
        console.log("response", datares)


        setData(datares)



    }

    console.log("data array", data)



    /*useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/home')
        }
    }, [router, status])*/

    useEffect(() => {
        calldata()
    }, [])

    return (
        <main>
            <Navbar />
            <div className="flex-col justify-center  min-h-[100vh] bg-cover bg-no-repeat ">

                {/*<h1> {session?.user?.name}</h1>*/}
                <div className="flex justify-center my-5 p-3 text-2xl font-bold tracking-tight text-white bg-[#5F8244] py-8 ">TEA BAG</div>
                <div className="flex justify-center"><ProductListtea teaproduct={data} /></div>
                <div className="flex justify-center my-5 p-3 text-2xl font-bold tracking-tight text-white bg-[#5F8244] py-8">TEA POT</div>
                <div className="flex justify-center "><ProductListpot teaproduct={data} /></div>
                <div className="flex justify-center my-5 p-3 text-2xl font-bold tracking-tight text-white bg-[#5F8244] py-8">TEA CUB</div>
                <div className="flex justify-center"><ProductListcub teaproduct={data} /></div>




            </div>

        </main>

    );
}
