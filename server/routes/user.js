const express = require('express')
const User = require('../models/user')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.post('/login', async(req,res)=>{
    try{
        data = req.body
        user = await User.findOne({username:data.username})
        if(!user){
            res.status(404).send('email or password invalid !')
        }
        else{
            validPasswd = await bcrypt.compareSync(data.password, user.password)
            if(!validPasswd){
                res.status(401).send('email or password invalid !')
            }
            else{
                preload = {
                    _id : user.id,
                    name : user.firstname+user.lastname,
                    username : user.username
                }

                mytoken = jwt.sign(preload, 'testLogin')
                res.status(200).send({mytoken:mytoken})
            }
        }

    }
    catch(error){
        res.status(400).send(error)
    }
})

router.post('/register', async(req, res)=>{
    try{
        data = req.body; 
        usr = new User(data)
        salt = bcrypt.genSaltSync(10)
        crytoPasswd = await bcrypt.hashSync(data.password, salt)
        usr.password = crytoPasswd
        savedUser = await usr.save()
        res.status(200).send(savedUser)
    }
    catch(error){
        res.status(400).send(error)
    }
})



router.post('/create', (req, res)=>{
    const data = req.body;
    usr = new User(data)
    usr.save()
        .then(
            (savedUser)=>{
                res.send(savedUser)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})


router.get('/getAll', async(req, res)=>{
    try{
        const users = await User.find();
        res.send(users)
    }
    catch(err){
        res.send(err)
    }
})




router.get('/getById/:id', async(req, res)=>{
    try{
        usr = await User.findById(req.params.id)
        res.send(usr)
    }
    catch(error){
        res.send(error)
    }
})


router.put('/update/:id', (req,res)=>{
    id = req.params.id
    newUser = req.body
    User.findByIdAndUpdate({_id:id}, newUser)
        .then(
            (updatedUser)=>{
                res.send(updatedUser)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})


router.delete('/delete/:id', async(req, res)=>{
    try{
        deletedUser = await User.findOneAndDelete({_id:req.params.id})
        res.send(deletedUser)
    }
    catch(error){
        res.send(error)
    }
})



module.exports = router