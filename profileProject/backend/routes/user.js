const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const cors = require('cors')
router.use(cors())


router.post('/register', async(req,res)=>{
    try{
        data = req.body
        user = new User(data)
        salt = bcrypt.genSaltSync(10)
        cryptPasswd = await bcrypt.hashSync(user.password, salt)
        user.password = cryptPasswd
        savedUser = await user.save()
        res.status(200).send(savedUser)
    }
    catch(error){
        res.status(400).send(error)
    }
})

router.post('/connexion', async(req, res)=>{
    try{
        data = req.body
        checkedUser = await User.findOne({email:data.email})
        if(!checkedUser){
            res.status(404).send('email or password invalid !')
        }
        else{
            checkedPasswd = await bcrypt.compareSync(data.password,checkedUser.password )
            if(!checkedPasswd){
                res.status(401).send('email or password invalid !')
            }
            else{
                payload = {
                    _id:checkedUser.id,
                    firstname:checkedUser.firstname,
                    lastname:checkedUser.lastname,
                    email:checkedUser.email
                }
                mytoken = await jwt.sign(payload, 'profileProject')
                res.status(200).send({
                    _id:checkedUser.id,
                    firstname:checkedUser.firstname,
                    lastname:checkedUser.lastname,
                    email:checkedUser.email,
                    token: mytoken
                })
            }
        }
    }
    catch(error){
        res.status(400).send(error)
    }
})



module.exports = router;