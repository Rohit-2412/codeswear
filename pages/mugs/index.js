import EmptyState from "../../components/emptyState";
import Product from "../../models/Product";
import ProductItem from "../../components/productItem";
import React from "react";
import mongoose from "mongoose";
const Mugs = ({ products }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container p-10  mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {/* if no product */}
                    {Object.keys(products).length === 0 && <EmptyState />}

                    {/* render the products is present */}
                    {Object.keys(products).map((item) => {
                        return (
                            <ProductItem
                                key={products[item]._id}
                                product={products[item]}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// server side rendering
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        // make connection to mongodb
        await mongoose.connect(process.env.MONGO_URI);
    }
    let products = await Product.find({ category: "mug" });

    let mugs = {};

    for (let item of products) {
        if (item.title in mugs) {
            if (
                !mugs[item.title].color.includes(item.color) &&
                item.availableQty > 0
            ) {
                mugs[item.title].color.push(item.color);
            }
            if (
                !mugs[item.title].size.includes(item.size) &&
                item.availableQty > 0
            ) {
                mugs[item.title].size.push(item.size);
            }
        } else {
            mugs[item.title] = JSON.parse(JSON.stringify(item));
            if (item.availableQty > 0) {
                mugs[item.title].color = [item.color];
                mugs[item.title].size = [item.size];
            }
        }
    }
    return {
        props: {
            products: JSON.parse(JSON.stringify(mugs)),
        },
    };
}
export default Mugs;
