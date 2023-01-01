import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Nabvar = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl'>
            <div className="logo mx-5">
                <Image src="/vercel.svg" width={100} height={100} />
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-2 font-bold md:text-md'>
                    <Link href={'/tshirts'}><li>Tshirt</li></Link>
                    <Link href={'/hoodies'}><li>Hoodies</li></Link>
                    <Link href={'/stickers'}><li>Stickers</li></Link>
                    <Link href={'/mugs'}><li>Mugs</li></Link>
                </ul>
            </div>
            <div className="cart absolute right-1 top-4">
                <AiOutlineShoppingCart className='text-xl md:text-3xl' />
            </div>
        </div>
    )
}

export default Nabvar