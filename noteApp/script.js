const container = document.getElementById('container');

function createNote(){
    const div = document.createElement('div')
    div.classList.add('note')
    const p = document.createElement('p')
    p.classList.add('noteText')
    p.setAttribute('contenteditable', 'true')
    const img = document.createElement('img');
    img.id='delete'
    img.src = './delete.png'
    div.appendChild(p)
    div.appendChild(img)
    container.appendChild(div);
    updateStorage();
}


function updateStorage(){
    console.log('update')
    localStorage.setItem('notes', container.innerHTML)
}

function getData(){
    container.innerHTML = localStorage.getItem('notes')
}

container.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
            e.target.parentElement.remove()
            updateStorage()
    }
    else if(e.target.tagName === 'P'){
        const paragraph = document.querySelectorAll('.noteText')
        paragraph.forEach((p)=>{
            p.onkeyup=function(){
                updateStorage()
            }
        })
    }
})

function deleteAll(){
    localStorage.removeItem('notes')
    location.reload();
}
document.addEventListener('keydown', event=>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak')
        event.preventDefault()
    }
})
getData();