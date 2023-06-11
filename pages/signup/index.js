import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()

    const handleChange = (e) => {
        if (e.target.name == 'name') setName(e.target.value)
        else if (e.target.name == 'email') setEmail(e.target.value)
        else if (e.target.name == 'password') setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = { name, email, password }

        let res = await fetch('http://localhost:3000/api/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        let response = res.json()

        setEmail('')
        setPassword('')
        setName('')

        toast.success('Account created Successfully', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    useEffect(() => {

        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    return (
        <div>
            <ToastContainer
                position="top-left"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600" alt="Your Company" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or
                            <Link href={'/login'} className="font-medium text-pink-600 hover:text-pink-500"> Sign in</Link>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm" >
                            <div>
                                <label for="name" className="sr-only">Name</label>
                                <input value={name} onChange={handleChange} id="name" name="name" type="text" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" placeholder="Name" />
                            </div>
                            <div>
                                <label for="email" className="sr-only">Email address</label>
                                <input value={email} onChange={handleChange} id="email" name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label for="password" className="sr-only">Password</label>
                                <input value={password} onChange={handleChange} id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div>
                            <button onSubmit={handleSubmit} type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                                    <svg className="h-5 w-5 text-pink-500 group-hover:text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup