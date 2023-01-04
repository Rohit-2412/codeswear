// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {

        for (let i = 0; i < req.body.length; i++) {
            await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ message: "Products updated successfully" })
    }
    else {
        res.status(400).json({ error: "Bad request" })
    }

}

export default connectDB(handler)