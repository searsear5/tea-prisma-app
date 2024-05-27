'use client'
import axios from "axios"
import Item from "./item"
import { useState } from "react"

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

function Allitem({ allitem }: { allitem: cart[] }) {
    const renderitem = allitem.map((item: cart) => {
        return (<Item item={item} />)
    })

    let sum = 0
    for (let i = 0; i < allitem.length; i++) {
        let price = Number(allitem[i].sumprice)
        sum = sum + price

    }

    const buy = () => {
        const hisdata = allitem.map(async (item: cart) => {
            const addhisdata = await axios.post(`/api/cart`, {
                quantity: item.quantity,
                teaname: item.tea.teaname,
                description: item.tea.description,
                price: item.tea.price,
                image_url: item.tea.image_url,
                type: item.tea.type

            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })



            const resdel = await axios.delete(`/api/cart/${item.cartid}`)
            location.reload()
            console.log("add orderhistory", addhisdata)


        })



    }

    return (
        <div>
            <div>{renderitem}</div>
            <div className="flex justify-around bg-[#738664] gap-5 m-5 px-5 py-5 text-xl font-bold text-white">total price : {sum}</div>
            <div className="flex justify-around  gap-5 m-5 px-5 py-5 text-xl font-bold text-white"><button onClick={buy} className="bg-[#738664] px-5 py-1 rounded-md mt-2 hover:bg-green-700">buy</button></div>
        </div>
    )

}



export default Allitem