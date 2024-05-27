"use client"
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import ProductListtea from "../components/productListtea";
import ProductListpot from "../components/productListpot";
import ProductListcub from "../components/productListcub";


export default function Home() {

    const { data: session, status } = useSession()
    console.log(session)
    console.log(status)

    type teatype = {
        description: string
        image_url: string
        price: number
        tea_id: number
        teaname: string
        type: string

    }

    const [data, setData] = useState<teatype[]>([])

    const calldata = async (): Promise<any> => {

        const response = await axios.get(`${process.env.BASE_URL_NEXTJS}/api/home`)
        const datares: any = response.data.data
        console.log("response", datares)


        setData(datares)



    }

    console.log("data array", data)





    useEffect(() => {
        calldata()
    }, [])

    return (
        <main>
            <Navbar />
            <div className="flex-col justify-center  min-h-[100vh] bg-cover bg-no-repeat ">
                <h3>Home page</h3>
                <h1> {session?.user?.name}</h1>
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
