import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

const Hoodies = ({ products }) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-10 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center -m-4">

                        {Object.keys(products).length === 0 && <div>
                            <h1 className="text-2xl font-bold text-center text-pink-500">No Products Right Now!</h1>
                            <h2 className="text-lg font-semibold mt-4">We'll add New products soon</h2>
                        </div>}

                        {
                            Object.keys(products).map((item) => {
                                return <Link key={products[item]._id} href={`product/${products[item].slug}`}>
                                    <div className="p-4 w-full cursor-pointer shadow-lg m-1 rounded-md">
                                        <a className="block relative rounded overflow-hidden">
                                            <img
                                                alt="ecommerce"
                                                className="h-[30vh] m-auto md:h-[36vh] block"
                                                src={products[item].image}
                                            />
                                        </a>
                                        <div className="mt-4 text-center md:text-left">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                {products[item].category}
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                                {products[item].title}
                                            </h2>
                                            <p className="mt-1">Rs {products[item].price}</p>
                                            <div className="mt-1">
                                                {products[item].size.includes("S") && <span className="border border-black mr-2 px-1">S</span>}
                                                {products[item].size.includes("M") && <span className="border border-black mr-2 px-1">M</span>}
                                                {products[item].size.includes("L") && <span className="border border-black mr-2 px-1">L</span>}
                                                {products[item].size.includes("XL") && <span className="border border-black mr-2 px-1">XL</span>}
                                                {products[item].size.includes("XXL") && <span className="border border-black mr-2 px-1">XXL</span>}
                                            </div>

                                            <div className="mt-2">
                                                {products[item].color.includes('Black') && <button className="border-2 border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none mr-2"></button>}
                                                {products[item].color.includes('White') && <button className="border-2 border-gray-300 bg-white rounded-full w-6 h-6 focus:outline-none mr-2"></button>}
                                                {products[item].color.includes('Red') && <button className="border-2 border-gray-300 bg-red-500 rounded-full w-6 h-6 focus:outline-none mr-1"></button>}
                                                {products[item].color.includes('Blue') && <button className="border-2 border-gray-300 bg-blue-500 rounded-full w-6 h-6 focus:outline-none mr-2"></button>}
                                                {products[item].color.includes('Green') && <button className="border-2 border-gray-300 bg-green-500 rounded-full w-6 h-6 focus:outline-none mr-2"></button>}
                                                {products[item].color.includes('Yellow') && <button className="border-2 border-gray-300 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none mr-2"></button>}
                                                {products[item].color.includes('Purple') && <button className="border-2 border-gray-300 bg-purple-500 rounded-full w-6 h-6 focus:outline-none mr-2"></button>}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

// server side rendering
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        // make connection to mongodb
        await mongoose.connect(process.env.MONGO_URI)
    }
    let products = await Product.find({ category: "hoodie" });

    let hoodies = {}

    for (let item of products) {
        if (item.title in hoodies) {
            if (!hoodies[item.title].color.includes(item.color) && item.availableQty > 0) {
                hoodies[item.title].color.push(item.color)
            }
            if (!hoodies[item.title].size.includes(item.size) && item.availableQty > 0) {
                hoodies[item.title].size.push(item.size)
            }
        }
        else {
            hoodies[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty > 0) {
                hoodies[item.title].color = [item.color]
                hoodies[item.title].size = [item.size]
            }
        }
    }
    return {
        props: {
            products: JSON.parse(JSON.stringify(hoodies))
        }
    }
}
export default Hoodies;
