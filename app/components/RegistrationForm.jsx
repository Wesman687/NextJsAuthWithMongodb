'use client'
import React from 'react'
import SocialLogins from './SocialLogin'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { doCredentialLogin } from '../actions'

export default function RegistrationForm() {
    const router = useRouter()
    async function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        if (name && email && password) {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            if (response.status != 201) return
            else {
                router.push('/verifyemail')
            }
            
        } catch (e) {
            console.log(e)
        }
    }
    }
  return (
    <>
    <form className='text-white my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md w-fit'
    onSubmit={handleSubmit} >
    <div className='my-2'>
        <label htmlFor="name">Name</label>
        <input className='border mx-2 ml-9 border-grey-500 rounded text-black focus:text-black focus-within:text-black placeholder:text-black ' 
         type='name' name='name' id='name'/>
    </div>
    <div className='my-2'>
        <label htmlFor="email">Email</label>
        <input className='border mx-2 ml-9 border-grey-500 rounded text-black focus:text-black focus-within:text-black placeholder:text-black ' 
         type='email' name='email' id='email'/>
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <input className='border mx-2 border-gray-500 rounded ml-1 text-black focus:text-black focus-within:text-black placeholder:text-black'
        type="password" name='password' id='password' />
    </div>
    <button type='submit' className='bg-orange-300 mt-4 rounded flex justify-center items-center w-36'>Register</button>
    </form>
    <SocialLogins />
    <p className='my-3'>
        Already have an Account?
    <Link href='/' className='mx-2 underline text-blue-600'>Login</Link></p>
    </>
  )
}
