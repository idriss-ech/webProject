import express from "express";
import {body, ExpressValidator} from 'express-validator'
import bcrypt from "bcrypt"
import User from "../models/user.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

const router = express.Router()

router.post('/create',
    [
        body('firstname').trim().notEmpty().withMessage('firstname is required'),
        body('lastname').trim().notEmpty().withMessage('lastname is required'),
        body('username').isEmail().withMessage('Enter a valid email'),
        body('password').isLength({min:6}).withMessage('Password must be at least 6 characters')
    ]
    , async(req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }
         const {firstname, lastname, username, password} = req.body;
        try{
            const existUser = await User.findOne({username})
            if(existUser){
                return res.status(400).json({message: 'username already in use'})
            }

            const salt = bcrypt.genSaltSync(10)
            const cryptedPasswd = bcrypt.hashSync(password, salt)
            const  user = new User({firstname, lastname, username, password:cryptedPasswd})
            const savedUser = await user.save()
            res.status(201).json(savedUser)

        }
        catch(error){
            console.log(error)
            res.status(500).json({message:'server Error'})
        }
    })

router.post('/connexion',
    [
        body('username').isEmail().withMessage('Enter a valid email')
    ],
    async(req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }
        const {username, password} = req.body
        try{
            const findUser = await User.findOne({username})
            if(!findUser){
                return res.status(404).json({message:'invalid email or password'})
            }
            else{
                const testPasswd = await bcrypt.compareSync(password, findUser.password)
                if(!testPasswd){
                    return res.status(401).json({message:'invalid email or password'})
                }
                else{
                    const payload = {
                        id:findUser._id,
                        username: findUser.username
                    }
                    const mytoken = jwt.sign(payload, 'ois@F223S', {expiresIn:'1h'})
                    const data = {
                        _id:findUser._id,
                        firstname:findUser.firstname,
                        lastname:findUser.lastname,
                        username:findUser.username,
                        token:mytoken
                    }
                    res.status(200).json(data)
                }
                
            }
        }
        catch(error){
            console.log(error)
            res.status(500).json(error)
        }
    }
)




export default router;