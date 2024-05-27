import axios from "axios"


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

function Item({ item }: { item: cart }) {

    const handlecancel = async (): Promise<any> => {
        const resdel = await axios.delete(`/api/cart/${item.cartid}`)
        location.reload()
    }

    return (
        <div className="flex justify-around bg-[#738664] gap-5 m-5 px-5 py-5 text-xl font-bold">
            <div className="flex gap-10 px-5 min-w-72 justify-between ">{item.tea.teaname}
                <div className="flex bg-gray-200 px-8">{item.quantity}</div>
            </div>
            <div className="flex min-w-100 px-5">{item.sumprice}</div>
            <div className=" flex text-white min-w-100 bg-black p-1 rounded hover:bg-red-500"><button onClick={handlecancel}>cancel</button></div>

        </div>
    )
}

export default Item