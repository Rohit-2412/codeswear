// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import connectDB from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == "POST") {
        let { name, email, password } = req.body

        let encryptedPass = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
        let u = new User({ name, email, password: encryptedPass })
        await u.save()

        res.status(200).json({ message: "success" })
    }
    else {
        res.status(400).json({ error: "Bad request" })
    }

}

export default connectDB(handler)