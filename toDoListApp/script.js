


const ul = document.getElementById('list')
function addItem(){
    const inputField = document.getElementById('inputField');
    if(inputField.value === '') alert('You must write somethings !')
    else {
        const li = document.createElement('li');
        li.innerHTML = inputField.value
        const icon = document.createElement('span')
        // icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 2048 2048"><path fill="#000000" d="m1115 1024l914 915l-90 90l-915-914l-915 914l-90-90l914-915L19 109l90-90l915 914l915-914l90 90z"/></svg>'
        icon.innerHTML = '\u00d7'
        li.appendChild(icon)
        ul.appendChild(li)
    }
    inputField.value = ''
    saveData();
    
}

ul.addEventListener('click', (e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem('todolist', ul.innerHTML)
}
function getData(){
    ul.innerHTML = localStorage.getItem('todolist')
}

getData();
