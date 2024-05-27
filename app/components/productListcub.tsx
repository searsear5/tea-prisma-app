import Productshow from "./productshow"

type teatype = {

    description: string
    image_url: string
    price: number
    tea_id: number
    teaname: string
    type: string

}
function ProductListcub({ teaproduct }: { teaproduct: teatype[] }) {

    const renderProduct = teaproduct.map((tea: teatype) => {
        if (tea.type == 'teacub') { return <Productshow key={tea.tea_id} tea={tea} /> }

    })


    return (
        <div>
            <div className="flex flex-wrap gap-x-24 gap-y-12 justify-center">{renderProduct}</div>
        </div>
    )
}

export default ProductListcub