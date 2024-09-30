const express = require('express')
const Product = require('../models/product')
const router = express.Router()
const multer = require('multer')

let filename = ''
const myStorage = multer.diskStorage({
    destination:'./uploads',
    filename:(req, file, redirect)=>{
        let date = Date.now()
        let name = date+'.'+file.mimetype.split('/')[1]
        redirect(null,name)
        filename = name
    }
})

const upload = multer({storage:myStorage})
// products end points 

    // add product 
    router.post('/create',upload.any('image'), async(req, res)=>{
        try{
            data = req.body
            newProduct = new Product(data)
            newProduct.image = filename
            const createdProduct = await newProduct.save()
            filename= ''
            res.status(200).send(createdProduct)
        }
        catch(error){
            res.status(400).send(error)
        }
    })

    // get all products
    router.get('/getAll', async(req, res)=>{
        try{
            products = await Product.find()
            res.status(200).send(products)
        }
        catch(error){
            res.status(400).send(error)
        }
    })

    // update product 

    router.put('/update/:id', async(req,res)=>{
        try{
            id = req.params.id
            product = req.body
            const updatedProduct = await Product.findByIdAndUpdate({_id:id}, product)
            res.status(200).send(updatedProduct)
        }
        catch(error){
            res.status(400).send(error)
        }
    })
    // delete product 
    router.delete('/delete/:id', async(req, res)=>{
        try{
            id = req.params.id
            const deletedProduct = await Product.deleteOne({_id:id})
            res.status(200).send(deletedProduct)
        }
        catch(error){
            req.status(400).send(error)
        }
    })

module.exports = router;