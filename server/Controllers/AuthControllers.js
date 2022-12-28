const UserModel = require("../Models/UserModel.js");
const jwt = require("jsonwebtoken");

const maxAge = 3*24*60*60;

const createToken = (id) => {
    return jwt.sign({id}), "Shonenwing678!", ({
        expiresIn: maxAge,
    });
};

module.exports.SignIn = async (req, res, next) => {};

module.exports.SignUp = async (req, res, next) => {
    try {
        const {firstname, 
               lastname, 
               email, 
               age, 
               password, 
               gender, 
               occupation, 
               country } = req.body;

        const user = await UserModel.create({firstname, 
                                             lastname, 
                                             email, 
                                             age, 
                                             password, 
                                             gender, 
                                             occupation, 
                                             country});
                                             
        const token = createToken(user._id)

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge*1000
        });
        res.status(201).json({user: user._id, created: true});
    } catch(err) {
        console.log(err);
    }
};