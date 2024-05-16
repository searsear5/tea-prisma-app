"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username)
        console.log(password)
        try {
            const res = await signIn("credentials", {
                username, password, redirect: false
            })
            console.log("response", res)
            router.push('/userlogin')

            /*if (res?.error) {
                setError("invalid credential")
                return
            }
            console.log('login success')
             router.replace("http://localhost:3000/home")*/
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Navbar />
            <div className='container mx-auto py-5'>
                <h3>Sign in Page</h3>
                <hr className='my-3' />
                <form onSubmit={handleSubmit}>

                    {error && (
                        <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                            {error}
                        </div>
                    )}

                    <input onChange={(e) => setUsername(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="text" placeholder='username' />
                    <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="password" placeholder='password' />

                    <button type='submit' className='bg-blue-500 p-2 rounded-md text-white'>Sign in</button>
                </form>
                <hr className='my-3' />
                <p>Already have an account?<Link className='text-blue-500 hover:underline' href="/signup">Sign up</Link>Page</p>
            </div>
        </div>
    )
}

export default LoginPage