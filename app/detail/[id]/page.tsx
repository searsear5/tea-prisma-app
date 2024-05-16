"use client"

import { useParams } from "next/navigation";


import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Teadetail1 from "@/app/components/teadetail";
import Navbar from "@/app/components/Navbar";
import Teadetail from "@/app/components/teadetail";
import Teadetail2 from "@/app/components/teadetail2";
type teatype = {
    description: string
    image_url: string
    price: number
    tea_id: number
    teaname: string
    type: string

}



function Detailtea({ params }: { params: { id: string } }) {
    const { id } = params

    const [data, setData] = useState<any>({})
    const [name, setName] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [desc, setDesc] = useState<string>("")




    const fetchdetail = async (id: string): Promise<any> => {
        const response = await axios.get(`/api/detail/${id}`)
        const resdata: any = response.data.data

        setName(resdata.teaname)
        setImage(resdata.image_url)
        setPrice(resdata.price)
        setDesc(resdata.description)

        setData(resdata)
        console.log("resdata", resdata)






    }



    useEffect(() => {
        if (id) {
            fetchdetail(id)


        }

    }, [id])

    return (
        <main>
            <Navbar />
            <div className="flex-col justify-center">





                <Teadetail teaname={name} image={image} />
                <Teadetail2 teadetail={desc} price={price} id={id} />





            </div>
        </main>

    )
}

export default Detailtea