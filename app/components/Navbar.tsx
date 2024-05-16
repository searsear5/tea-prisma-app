"use client"
import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

function Navbar() {
    const { data: session, status } = useSession()
    return (
        <nav className='bg-gray-500 text-white p-5'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div>
                        <Link href="/home">Home Page</Link>
                    </div>
                    <ul className='flex '>
                        {status == 'authenticated' && (
                            <div className='bg-black hover:bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                                <li className=' hover:cursor-pointer'><a onClick={() => signOut()} className='bg-black hover:bg-red-500 text-white  rounded-md text-lg '>Sign out</a></li>
                            </div>
                        )}
                        {status == 'unauthenticated' && (
                            <div className='flex'>
                                <li className='mx-auto px-2 block'><Link href="/login">Sign In</Link></li>
                                <li className='mx-auto px-2 block'><Link href="/signup">Sign up</Link></li>
                            </div>
                        )}


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar