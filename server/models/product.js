const mongoose = require('mongoose')

const Product = mongoose.model('products', {
    title:{
        type:String
    },
    brand:{
        type:String
    }, 
    price:{
        type:Number
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
    
})

module.exports = Product;