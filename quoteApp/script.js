const author = document.getElementById('quoteAuthor')
const quote = document.getElementById('quoteBody')

function showQuote(){
    fetch('http://localhost:3000/random/quote')
        .then(response=>{
            if(!response.ok) throw new Error('failed to fetch qoutes')
            return response.json();
        })
        .then(data=>{
            quote.textContent = data.quote;
            author.textContent = data.author;
        })
        .catch(error=>{
            console.error(error.message)
        })
}


function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`,"Tweet Window","width=600, height=500")
}