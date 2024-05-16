"use client"



type teatype = {
    description: string
    image_url: string
    price: number
    tea_id: number
    teaname: string
    type: string

}

function Teadetail({ teaname, image }: { teaname: string, image: string }) {




    return (
        <div className="flex-col items-center justify-center  ">
            <h1 className="flex justify-center my-8 text-2xl font-bold tracking-tight text-white bg-[#5F8244] py-8 ">{teaname}</h1>
            <div className="flex justify-center my-5"><img className="w-64 flex justify-center" src={image} alt="tea image" /></div>

        </div>
    )
}

export default Teadetail