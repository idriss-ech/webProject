const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/profile')
    .then(
        ()=>{
            console.log('Database connexion')
        }
    )
    .catch(
        (err)=>{
            console.log(`Error connexion to database : ${err}`)
        }
    );


module.exports = mongoose;

