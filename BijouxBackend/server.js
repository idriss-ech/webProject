import express from 'express'
import './config/database.js'
import userRouter from './routes/user.rout.js'
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import './strategies/local_strategy.js'


const app = express(); 
const port = 3000; 
app.use(express.json())
app.use(session({
    secret:'secret', 
    saveUninitialized:false, 
    resave:false,
    cookie:{
        maxAge:60000*60
    },
    store: MongoStore.create({
        client:mongoose.connection.getClient()
    })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/user', userRouter)


app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})




