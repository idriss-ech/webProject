import mongoose from 'mongoose'

const CONNEXION_STRING = 'mongodb://localhost:27017/testing'; 

mongoose.connect(CONNEXION_STRING)
        .then(()=>{
            console.log('connexion to database')
        })
        .catch((err)=>{
            console.log(`connexion to database failed : ${err}`)
        })

export default mongoose;



