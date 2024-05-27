"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

type teatype = {
    description: string
    image_url: string
    price: number
    tea_id: number
    teaname: string
    type: string

}



function Teadetail2({ teadetail, price, id }: { teadetail: string, price: number, id: string }) {

    const [qty, setQty] = useState<number>(1)
    const [total, setTotal] = useState<number>(price)
    let total2 = price * qty

    const router = useRouter()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTotal(price * qty)

        // console.log("total", total)

        console.log("qty", qty)
        console.log("totla 2 ", total2)

        const response = await axios.post(`/api/detail/${id}`, {
            quantity: qty,
            sumprice: total2
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const resdata: any = response.data
        console.log("resdata", resdata)



        router.push(`/cart`)


    }

    return (
        <div className="flex-col justify-center">

            <div className="flex justify-center m-24"><p>{teadetail}</p></div>
            <div className=" flex justify-center">
                <form className="flex-col justify-center" onSubmit={handleSubmit}>
                    <div className="flex justify-center">
                        <div className="mr-16">PRICE : {price}</div>
                        <div><input onChange={(e) => setQty(Number(e.target.value))} className="flex-col w-12" type="number" defaultValue={1} min={1} />quantity</div>
                    </div>

                    <div className="flex">
                        <Link href="/userlogin" className="flex justify-center bg-[#5F8244]  text-sm text-white py-5 w-56  m-24 w-min-50">back</Link>
                        <button type='submit' className="flex justify-center bg-[#5F8244]  text-sm text-white py-5 w-56 m-24">add to cart</button>

                    </div>



                </form>
            </div>


        </div>
    )

}

export default Teadetail2