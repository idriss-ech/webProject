import express from 'express'
import cors from 'cors'
const app = express(); 
app.use(cors())
app.use(express.json())

const quotes = [
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Get your facts first, then you can distort them as you please.",
        author: "Mark Twain"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "The best way to predict your future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    }
]


app.get('/random/quote', (req, res)=>{
    try{
        const id =Math.floor(Math.random()*quotes.length)
        res.status(200).json(quotes[id])
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})




app.listen(3000, ()=>{
    console.log('Server start running on port 3000')
})