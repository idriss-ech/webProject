const express = require('express')
const usersRoute = require('./routes/user')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json())
require('./config/database')
const port = 3000

app.use('/users', usersRoute)



app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})