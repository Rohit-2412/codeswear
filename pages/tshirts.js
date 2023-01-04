import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";
const Tshirts = ({ products }) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center -m-4">
                        {
                            products.map((product) => {
                                return <Link key={product._id} href={`product/${product.slug}`}>
                                    <div className="p-4 w-full cursor-pointer shadow-lg m-1 rounded-md">
                                        <a className="block relative rounded overflow-hidden">
                                            <img
                                                alt="ecommerce"
                                                className="h-[30vh] m-auto md:h-[36vh] block"
                                                src={product.image}
                                            />
                                        </a>
                                        <div className="mt-4 text-center md:text-left">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                                {product.category}
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                                {product.title}
                                            </h2>
                                            <p className="mt-1">Rs {product.price}</p>
                                            <p className="mt-1">{product.size}</p>
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
    let products = await Product.find({ category: "tshirt" });

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }

}
export default Tshirts;
