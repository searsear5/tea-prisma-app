"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const SignupPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [error, Seterror] = useState("")
    const router = useRouter()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!username || !password || !name || !lastname || !email || !address
            || !phone) {
            Seterror("please complete all input")
            return
        }

        try {

            const res = await axios.post('/api/auth/signup', {
                username: username,
                userpass: `${password}`,
                name: `${name}`,
                lastname: `${lastname}`,
                email: `${email}`,
                address: `${address}`,
                phone: `${phone}`
            })

            if (res) {
                const form = e.target as HTMLFormElement
                Seterror("")
                form.reset()
                console.log('sign up success')
                router.push('/userlogin')


            } else {
                console.log('user sign up failed')
            }

        } catch (error) {
            console.log("error during sign up", error)
        }

    }

    return (
        <div>
            <Navbar />
            <div className='container mx-auto py-5'>
                <h3>Sign up Page</h3>
                <hr className='my-3' />
                <form onSubmit={handleSubmit}>

                    {error && (
                        <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                            {error}
                        </div>
                    )}

                    <div className='flex items-center text-xl gap-x-5'><div className='px-10 w-64'>username :</div> <div> <input onChange={(e) => setUsername(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="text" placeholder='username' /></div></div>
                    <div className='flex items-center text-xl gap-x-5'><div className='px-10 w-64'>password :</div><div> <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="password" placeholder='password' /></div></div>
                    <div className='flex items-center text-xl gap-x-5'><div className='px-10 w-64'> name :</div> <div><input onChange={(e) => setName(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="text" placeholder='name' /></div></div>
                    <div className='flex items-center text-xl gap-x-5'><div className='px-10 w-64'>lastname :</div> <div><input onChange={(e) => setLastname(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="text" placeholder='lastname' /></div></div>
                    <div className='flex items-center text-xl gap-x-5'><div className='px-10 w-64'>email :</div> <div><input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="email" placeholder='email' /></div ></div>
                    <div className='flex items-center text-xl gap-x-5'><div className='px-10 w-64'>address :</div> <div><input onChange={(e) => setAddress(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="text" placeholder='address' /></div ></div>
                    <div className='flex items-center text-xl gap-x-5'><div className='px-10 w-64'>phone :</div> <div><input onChange={(e) => setPhone(e.target.value)} className='block bg-gray-200 p-2 my-2 rounded-md' type="text" placeholder='phone' /></div ></div>
                    <button type='submit' className='bg-blue-500 p-2 rounded-md text-white'>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage