import { validationResult } from "express-validator"
import { crypting} from "../middleware/crypting.js"
import { matchedData } from "express-validator"
import User from "../models/user.model.js"


export const addUser = async(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const data = matchedData(req)
    data.password = crypting(data.password); 
    const user = new User(data)
    try{
        const savedUser = await user.save()
        res.status(200).json({message:savedUser})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

export const singup = async(req,res)=>{
    
}