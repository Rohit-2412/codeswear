import React from 'react'

const Order = ({ subTotal }) => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Codeswear.com</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #8977</h1>
                            <h3 className='text-lg'>Your order has been successsfully placed</h3>
                            <div class="flex mb-4 mt-4" >
                                <a className="flex-grow font-semibold border-b-2 border-gray-300 py-2 text-lg px-1">Description</a>
                                <a className="text-center font-semibold flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
                                <a className="text-right font-semibold flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item Total</a>
                            </div>
                            <div className="flex border-b border-gray-200 py-2">
                                <span className="text-gray-500">Wear the code XL/Blue</span>
                                <span className="ml-auto text-gray-500">1</span>
                                <span className="ml-auto text-gray-900">₹499</span>
                            </div>

                            <div className="flex border-b border-gray-200 py-2">
                                <span className="text-gray-500">Wear the code XL/Red</span>
                                <span className="ml-auto text-gray-500">1</span>
                                <span className="ml-auto text-gray-900">₹499</span>
                            </div>

                            <div className="flex border-b border-gray-200 py-2">
                                <span className="text-gray-500">Wear the code XL/Black</span>
                                <span className="ml-auto text-gray-500">1</span>
                                <span className="ml-auto text-gray-900">₹499</span>
                            </div>

                            <div className="flex flex-col mt-14">
                                <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹{subTotal}</span>
                                <div className="my-2 mt-4">
                                    <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
                                </div>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order