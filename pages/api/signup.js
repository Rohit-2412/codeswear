// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {

        let u = new User(req.body)
        await u.save()

        res.status(200).json({ message: "success" })
    }
    else {
        res.status(400).json({ error: "Bad request" })
    }

}

export default connectDB(handler)