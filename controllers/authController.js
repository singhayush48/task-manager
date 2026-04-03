const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { login, register} = require("../models/userModel");

const SECRET = "hmm.....";

// 🔐 LOGIN
const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await login(email);

        if (!user) {
            return res.status(404).send("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send("Invalid credentials");
        }

        const token = jwt.sign({id:user.id,email:user.email}, SECRET, {
            expiresIn: "1h",
        });

        res.cookie("token", token, {
            httpOnly: true,
        });

        return res.send("Login successful");
    } catch (err) {
        console.log(err)
        return res.status(500).send("Error");
    }
};

// 📝 REGISTER
const registerController = async (req, res) => {
    const {password, email } = req.body;

    if (!email || !password) {
        return res.send("email and password required");
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await register(
            hashedPassword,
            email
        );

        return res.json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Error");
    }
};

// 👤 PROFILE (Protected)

const logoutController=(req,res)=>{
 res.cookie("token","");
 res.send("logged out");
}
module.exports = {
    loginController,
    registerController,
    logoutController,
};