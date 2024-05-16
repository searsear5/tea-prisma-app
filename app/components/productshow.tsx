import { useSession } from "next-auth/react";
import Link from "next/link";
type teatype = {
    description: string
    image_url: string
    price: number
    tea_id: number
    teaname: string
    type: string

}
function Productshow({ tea }: { tea: teatype }) {
    const { data: session, status } = useSession()
    return (
        <div>


            <div className="flex justify-center  mx-5 max-w-[300px] w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="my-3">
                    <div>
                        <img className="rounded-t-lg h-64" src={tea.image_url} alt="" />
                    </div>
                    <div className="p-5">
                        <div >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white flex justify-center text-[#4F7E2A]">{tea.teaname}</h5>
                        </div>
                        <div className="flex justify-around">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">price :</h5>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{tea.price} $</h5>
                        </div>

                        {status == 'unauthenticated' &&
                            (<div><Link href="/login" className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4F7E2A] rounded-lg hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300  flex justify-center">Add to cart</Link></div>)}
                        {status == 'authenticated' &&
                            (<div><Link href={`/detail/${tea.tea_id}`} className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4F7E2A] rounded-lg hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300  flex justify-center">Add to cart</Link></div>)}


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Productshow