const express = require('express')
require ('./config/connexionDb')
const app = express()
app.use(express.json())
const port = 3000
const productRoute = require('./routes/product')
const userRoute = require('./routes/user')
const bookRoute = require('./routes/book')


app.use('/products', productRoute)
app.use('/books', bookRoute)
app.use('/users', userRoute)

app.use('/getImage', express.static('./uploads'))

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}/`)
})