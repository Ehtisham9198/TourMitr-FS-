const { hashPassword, comparePassword } = require('../helper/authHelper');
const UserModel = require('../models/userModel');
const JWT = require('jsonwebtoken');

const registerControler = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // check user
        const Existinguser = await UserModel.findOne({ email })
        // EXisting user
        if (Existinguser) {
            return res.status(200).send({
                success: false,
                message: 'Already Register please login',
            });
        }

        // Register user
        const hashedPassword = await hashPassword(password)
        // save
        const user = await new UserModel({ name, email, phone, address, password: hashedPassword }).save()

        res.status(201).send({
            success: true,
            message: "User Registered successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in registration',
            error
        })
    }
}
const loginControler = async (req, res) => {
    try {
        const { email, password } = req.body
        // check user
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            })
        }
        console.log(typeof password, typeof user.password);
        const match = await comparePassword(password, user.password)
        if (!match) {
            res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }
        // Token

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.status(200).send({
            success: true,
            message: "login suceessfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,

            },
            token,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })

    }


};

module.exports = { registerControler, loginControler};