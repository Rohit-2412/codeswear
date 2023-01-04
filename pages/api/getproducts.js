// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDB from "../../middleware/mongoose"
import mongoose from "mongoose"

const handler = async (req, res) => {
    let products = await Product.find()

    res.status(200).json({ products })
}

mongoose.models = {}
export default connectDB(handler)