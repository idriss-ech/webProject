const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/school')
    .then(
        ()=>{
            console.log('database connexion')
        }
    )
    .catch(
        (err)=>{
            console.log(`Error connexion to database : ${err}`)
        }
    )
module.exports = mongoose