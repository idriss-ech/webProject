const express = require('express')
const Book = require('../models/book')
const router = express.Router()



router.post('/create', async(req, res)=>{
    try{
        data = req.body
        book = new Book(data)
        const savedBook = await book.save()
        res.send(savedBook)
    }
    catch(error){
        res.send(error)
    }
})
router.get('/getAll', (req, res)=>{
    Book.find()
        .then(
            (books)=>{
                res.send(books)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})
router.get('/getById/:id', (req, res)=>{
    Book.findById(req.params.id)
        .then(
            (book)=>{
                res.send(book)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})
router.put('/update/:id', async(req, res)=>{
    try{
        console.log(req.params.id, req.body)
        updatedBook = await Book.findByIdAndUpdate({_id:req.params.id}, req.body)
        res.send(updatedBook)
    }
    catch(error){
        res.send(error)
    }
})

router.delete('/delete/:id', (req, res)=>{
    Book.findOneAndDelete({_id:req.params.id})
        .then(
            (deletedBook)=>{
                res.send(deletedBook)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})

module.exports = router;