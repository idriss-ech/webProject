const mongoose = require('mongoose')

const Book = mongoose.model('Book',{
    title:{
        type:String
    },
    author:{
        type:String
    },
    year:{
        type:Number
    }
})


module.exports = Book

