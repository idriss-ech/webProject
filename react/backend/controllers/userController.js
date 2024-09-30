import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id)=>{
    return jwt.sign({id}, process.env.TOKEN_SECRET);
}

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const options = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  };

  try {
    const checkUser = await userModel.findOne({email });
    if (checkUser)
      return res.json({ success: false, message: "user already exists !" });
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "enter a valid email" });
    }
    if (!validator.isStrongPassword(password, options)) {
      return res.json({ success: false, message: "enter a strong password" });
    }
    const salt = bcrypt.genSaltSync(10);
    const passwd = bcrypt.hashSync(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: passwd,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res
      .status(200)
      .json({ success: true, token:token});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};



const userLogin = async (req, res) => {
    const {email, password} = req.body;
    try{
        const findUser = await userModel.findOne({email});
        if(!findUser){
            return res.status(401).json({success:false, message:'user not found'});
        }
        const checkPasswd = await bcrypt.compare(password,findUser.password);
        if(!checkPasswd){
            return res.status(401).json({success:false, message:'Invalid credentials'});
        }
        res.status(200).json({success:true, token:createToken(findUser._id)})
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false, message:'Error'})
    }
};

export { userLogin, registerUser };
