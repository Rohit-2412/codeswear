// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
        let user = await User.findOne({ "email": req.body.email })
        if (user) {
            if (user.email == req.body.email && user.password == req.body.password)
                res.status(200).json({ success: true, message: "Login successfull" })
            else {
                res.status(200).json({ success: false, message: "Invalid credentials" })
            }
        }
        else {
            res.status(200).json({ success: false, message: "No such user found" })
        }
    }
    else {
        res.status(400).json({ error: "Bad request" })
    }

}

export default connectDB(handler)