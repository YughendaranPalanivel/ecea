var bcrypt = require("bcryptjs");
const User = require("../Models/userModel.js");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const signup = async (req, res) => {
    try{

        const {name, email, password} = req.body;

        if(!(name && email && password)){
            res.status(400).json("Input field should not be empty");
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
          res.status(409).send("User Already Exist. Please Login");
        }

        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);
    
        const newUser = await User.create({name: name, email: email, password: hashed_password});    
        const user = await newUser.save();

        const token = jwt.sign({email}, process.env.TOKEN_KEY);

        res.status(200).json({...user,token:token});
    }
    catch(err){
        console.log(err);
        res.status(500).json("Something Went Wrong!");
    }
}
const login = async (req, res) => {
    try{

        const {email, password} = req.body;

        if(!(email && password)){
            res.status(400).json("Input field should not be empty");
        }

        const user = await User.findOne({ email });

        console.log(user);

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({email}, process.env.TOKEN_KEY);
            res.status(200).json({...user,token:token});
        }

        else{
            res.status(400).json("Unautherized user");
        }
        
    }
    catch(err){
        console.log(err);
        res.status(500).json("Something Went Wrong!");
    }
}

module.exports = {signup, login};