import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { useRef } from "react";
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {

    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full")
            ref.current.classList.add("translate-x-0")
        }
        else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0")
            ref.current.classList.add("translate-x-full")
        }
    }
    const ref = useRef()
    return (
        <div className="shadow-md flex flex-col md:flex-row md:justify-start justify-center items-center  py-3">
            <div className="logo mx-5">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        height={40}
                        width={170}
                        alt="Loading..."
                        className="w-10/12"
                    />
                </Link>
            </div>
            <div className="nav">
                <ul className="flex space-x-2 font-bold md:text-sm">
                    <Link href="/tshirts">
                        <li>T-Shirts</li>
                    </Link>
                    <Link href="/hoodies">
                        <li>Hoodies</li>
                    </Link>
                    <Link href="/mugs">
                        <li>Mugs</li>
                    </Link>
                    <Link href="/stickers">
                        <li>Stickers</li>
                    </Link>
                </ul>
            </div>
            <div onClick={toggleCart} className="cart absolute right-0 mx-5 cursor-pointer">
                <AiOutlineShoppingCart size={30} />
            </div>

            <div ref={ref} className="w-72 h-full sideCart absolute bg-pink-100 top-0 right-0 py-10 px-8 transform transition-transform translate-x-full">
                <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute top-3 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>

                <ol className="list-decimal font-semibold">
                    {/* empty cart message */}
                    {Object.keys(cart).length === 0 && <div className="flex flex-col items-center justify-center h-full">
                        <BsBagCheckFill size={50} className='mt-4 text-pink-400' />
                        <h2 className="text-xl font-sm mt-3">Your cart is empty</h2>
                    </div>}

                    {/* displaying cart */}
                    {Object.keys(cart).map((k) => {
                        return <li key={k} >
                            <div className="item flex my-5">
                                <div className="w-2/3 font-semibold">{cart[k].name}</div>
                                <div className="flex items-center justify-center w-1/3 font-semibold">
                                    <AiFillMinusCircle onClick={() => { removeFromCart(k) }} className="cursor-pointer text-pink-500" />
                                    <span className="mx-2">{cart[k].qty} </span>
                                    <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer text-pink-500" /></div>
                            </div>
                        </li>
                    })}

                </ol>

                {(Object.keys(cart).length !== 0) && <div className="flex">
                    <button className="flex mx-auto mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm"><BsBagCheckFill className="m-1" />Checkout</button>
                    {/* clear cart button */}
                    <button onClick={clearCart} className="flex mx-auto mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm">Clear Cart</button>
                </div>
                }
            </div>
        </div >
    );
};

export default Navbar;