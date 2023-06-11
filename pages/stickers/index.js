import EmptyState from "../../components/emptyState";
import Product from "../../models/Product";
import ProductItem from "../../components/productItem";
import mongoose from "mongoose";

const Stickers = ({ products }) => {
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
    let products = await Product.find({ category: "sticker" });

    let stickers = {};

    for (let item of products) {
        if (item.title in stickers) {
            if (
                !stickers[item.title].color.includes(item.color) &&
                item.availableQty > 0
            ) {
                stickers[item.title].color.push(item.color);
            }
            if (
                !stickers[item.title].size.includes(item.size) &&
                item.availableQty > 0
            ) {
                stickers[item.title].size.push(item.size);
            }
        } else {
            stickers[item.title] = JSON.parse(JSON.stringify(item));
            if (item.availableQty > 0) {
                stickers[item.title].color = [item.color];
                stickers[item.title].size = [item.size];
            }
        }
    }
    return {
        props: {
            products: JSON.parse(JSON.stringify(stickers)),
        },
    };
}
export default Stickers;
