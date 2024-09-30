import express from 'express'
import cors from 'cors'
import connexiondb from './config/connexiondb.js'
import registerRouter from './routes/register.js'
import TodolistRouter from './routes/todolist.js'
const app = express()
connexiondb()
app.use(cors())
app.use(express.json())
app.use('/register', registerRouter )
app.use('/todolist',TodolistRouter)


app.listen(3001, ()=>{
    console.log(`Server is running on port 3001`)
})