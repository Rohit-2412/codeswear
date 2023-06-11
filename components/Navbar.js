import {
    AiFillCloseCircle,
    AiFillMinusCircle,
    AiFillPlusCircle,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { React, useState } from "react";

import { BsBagCheckFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { useRef } from "react";

const Navbar = ({
    user,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    logout,
}) => {
    const [dropdown, setDropdown] = useState(false);

    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full");
            ref.current.classList.add("translate-x-0");
        } else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0");
            ref.current.classList.add("translate-x-full");
        }
    };

    const ref = useRef();
    return (
        <div className="shadow-md flex flex-col md:flex-row md:justify-start justify-center items-center py-3 sticky top-0 z-10 bg-white">
            <div className="logo md:mx-5 mr-auto">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        height={40}
                        width={170}
                        alt="Loading..."
                        className="w-auto"
                    />
                </Link>
            </div>
            <div className="nav md:mt-0 mt-4">
                <ul className="flex space-x-2 font-bold md:text-md">
                    <Link href="/tshirts">
                        <li className="hover:text-pink-500">T-Shirts</li>
                    </Link>
                    <Link href="/hoodies">
                        <li className="hover:text-pink-500">Hoodies</li>
                    </Link>
                    <Link href="/mugs">
                        <li className="hover:text-pink-500">Mugs</li>
                    </Link>
                    <Link href="/stickers">
                        <li className="hover:text-pink-500">Stickers</li>
                    </Link>
                </ul>
            </div>
            <div className="flex cart absolute top-2 right-0 mx-5 cursor-pointer items-center">
                <span
                    onMouseOver={() => {
                        setDropdown(true);
                    }}
                    onMouseLeave={() => {
                        setDropdown(false);
                    }}
                >
                    {" "}
                    {user.value && (
                        <MdAccountCircle
                            size={30}
                            className="mx-3 text-pink-500"
                        />
                    )}
                    {dropdown && (
                        <div
                            onMouseOver={() => {
                                setDropdown(true);
                            }}
                            onMouseLeave={() => {
                                setDropdown(false);
                            }}
                            className="absolute top-8 right-10 w-36 bg-pink-300 px-6 py-2 rounded-lg"
                        >
                            <ol>
                                <Link href={"/myaccount"}>
                                    <li className="py-1 text-sm hover:text-white font-semibold">
                                        My Account
                                    </li>
                                </Link>
                                <Link href={"/orders"}>
                                    <li className="py-1 text-sm hover:text-white font-semibold">
                                        Orders
                                    </li>
                                </Link>
                                <li
                                    onClick={logout}
                                    className="py-1 text-sm hover:text-white font-semibold"
                                >
                                    Logout
                                </li>
                            </ol>
                        </div>
                    )}
                </span>
                {!user.value && (
                    <Link href="/login">
                        <button className="bg-pink-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-pink-400 hover:border-pink-600 border-2 mr-4">
                            Login
                        </button>
                    </Link>
                )}
                <AiOutlineShoppingCart
                    onClick={toggleCart}
                    size={30}
                    className="text-pink-500"
                />
            </div>

            <div
                ref={ref}
                className={`w-72 h-[100vh] overflow-y-scroll sideCart absolute bg-pink-100 top-0 right-0 py-10 px-8 transform transition-transform ${
                    Object.keys(cart).length !== 0
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
                <span
                    onClick={toggleCart}
                    className="absolute top-3 right-2 cursor-pointer text-2xl text-pink-500"
                >
                    <AiFillCloseCircle />
                </span>

                <ol className="list-decimal font-semibold">
                    {/* empty cart message */}
                    {Object.keys(cart).length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full">
                            <BsBagCheckFill
                                size={50}
                                className="mt-4 text-pink-400"
                            />
                            <h2 className="text-xl font-sm mt-3">
                                Your cart is empty
                            </h2>
                        </div>
                    )}

                    {/* displaying cart */}
                    {Object.keys(cart).map((k) => {
                        return (
                            <li key={k}>
                                <div className="item flex my-5">
                                    <div className="w-2/3 font-semibold">
                                        {cart[k].name}
                                    </div>
                                    <div className="flex items-center justify-center w-1/3 font-semibold">
                                        <AiFillMinusCircle
                                            onClick={() => {
                                                removeFromCart(k);
                                            }}
                                            className="cursor-pointer text-pink-500"
                                        />
                                        <span className="mx-2">
                                            {cart[k].qty}{" "}
                                        </span>
                                        <AiFillPlusCircle
                                            onClick={() => {
                                                addToCart(
                                                    k,
                                                    1,
                                                    cart[k].price,
                                                    cart[k].name,
                                                    cart[k].size,
                                                    cart[k].variant
                                                );
                                            }}
                                            className="cursor-pointer text-pink-500"
                                        />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                {Object.keys(cart).length !== 0 && (
                    <div className="flex">
                        <Link href={"/checkout"}>
                            <button className="flex mx-auto mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">
                                <BsBagCheckFill className="m-1" />
                                Checkout
                            </button>
                        </Link>
                        {/* clear cart button */}
                        <button
                            onClick={clearCart}
                            className="flex mx-auto mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
