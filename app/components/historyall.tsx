import Historyitem from "./history"

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
function Historyall({ data }: { data: his[] }) {
    const renderProduct = data.map((his: his) => {

        return <Historyitem item={his} />

    })


    return (
        <div className="flex-col m-5 justify-between">{renderProduct}</div>
    )
}

export default Historyall