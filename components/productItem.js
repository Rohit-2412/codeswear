import Link from "next/link";

export default function ProductItem({ product }) {
    return (
        <Link key={product._id} href={`product/${product.slug}`}>
            <div className="p-4 w-full cursor-pointer shadow-lg m-1 rounded-md">
                <div className="block relative rounded overflow-hidden">
                    <img
                        alt="product-image"
                        className="h-[24vh] m-auto md:h-[36vh] block object-cover"
                        src={product.image}
                    />
                </div>
                <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                        {product.title}
                    </h2>
                    <p className="mt-1">Rs {product.price}</p>
                    <div className="mt-1">
                        {product.size.includes("S") && (
                            <span className="border border-black mr-2 px-1">
                                S
                            </span>
                        )}
                        {product.size.includes("M") && (
                            <span className="border border-black mr-2 px-1">
                                M
                            </span>
                        )}
                        {product.size.includes("L") && (
                            <span className="border border-black mr-2 px-1">
                                L
                            </span>
                        )}
                        {product.size.includes("XL") && (
                            <span className="border border-black mr-2 px-1">
                                XL
                            </span>
                        )}
                        {product.size.includes("XXL") && (
                            <span className="border border-black mr-2 px-1">
                                XXL
                            </span>
                        )}
                    </div>

                    <div className="mt-2">
                        {product.color.includes("Black") && (
                            <button className="border-2 border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none mr-2"></button>
                        )}
                        {product.color.includes("White") && (
                            <button className="border-2 border-gray-300 bg-white rounded-full w-6 h-6 focus:outline-none mr-2"></button>
                        )}
                        {product.color.includes("Red") && (
                            <button className="border-2 border-gray-300 bg-red-500 rounded-full w-6 h-6 focus:outline-none mr-1"></button>
                        )}
                        {product.color.includes("Blue") && (
                            <button className="border-2 border-gray-300 bg-blue-500 rounded-full w-6 h-6 focus:outline-none mr-2"></button>
                        )}
                        {product.color.includes("Green") && (
                            <button className="border-2 border-gray-300 bg-green-500 rounded-full w-6 h-6 focus:outline-none mr-2"></button>
                        )}
                        {product.color.includes("Yellow") && (
                            <button className="border-2 border-gray-300 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none mr-2"></button>
                        )}
                        {product.color.includes("Purple") && (
                            <button className="border-2 border-gray-300 bg-purple-500 rounded-full w-6 h-6 focus:outline-none mr-2"></button>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
