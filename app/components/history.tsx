

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

function Historyitem({ item }: { item: his }) {



    //ทำ history ให้สมบูรณ์
    return (
        <div className="flex gap-5 py-5">

            <div className="max-w-m bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center gap-10">
                <a href="#">
                    <img className="rounded-t-lg w-64" src={item.image_url} alt="pic tea" />
                </a>
                <div className="p-5">
                    <div className="flex">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.teaname}</h5>
                        </a>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <div className="flex-col py-5">
                        <div className="flex m-2">
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5F8244] rounded-lg ">
                                quantity :  {item.quantity}

                            </a>
                        </div>
                        <div className="flex m-2">
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5F8244] rounded-lg ">
                                price : {item.price}

                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Historyitem