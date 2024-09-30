import { Router } from "express";
import {checkSchema, validationResult} from 'express-validator'
import { userValidation } from "../middleware/userValidation.js";
import passport from "passport";
import { addUser } from "../controllers/user.controller.js";
const router = Router(); 

router.post('/login',checkSchema(userValidation),addUser)
router.post('/signup',passport.authenticate('local'), (req,res)=>{
    console.log('Authenticated user:', req.user);
   res.sendStatus(200)
})
router.get('/status', (req, res)=>{
    const {user} = req; 
    if(!user) return res.sendStatus(400)
        console.log(user)
    res.sendStatus(200);
})

export default router; 
