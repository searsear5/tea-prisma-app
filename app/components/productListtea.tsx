import Productshow from "./productshow"

type teatype = {
    // [x: string]: any
    description: string
    image_url: string
    price: number
    tea_id: number
    teaname: string
    type: string

}
function ProductListtea({ teaproduct }: { teaproduct: teatype[] }) {

    const renderProduct = teaproduct.map((tea: teatype) => {
        if (tea.type == 'teabag') { return <Productshow key={tea.tea_id} tea={tea} /> }

    })


    return (
        <div className="flex flex-wrap gap-x-24 gap-y-12 justify-center ">
            {renderProduct}
        </div>
    )
}

export default ProductListtea