// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import connectDB from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken')

const handler = async (req, res) => {
    if (req.method == "POST") {
        let user = await User.findOne({ "email": req.body.email })
        if (user) {
            let { email, password } = req.body

            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)

            if (email == user.email && password == decryptedPass) {
                var token = jwt.sign({ name: user.name, email: user.email }, 'secret', {
                    expiresIn: '2d'
                })
                res.status(200).json({ success: true, token })
            }
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