const menu = document.getElementById('menu')
const btnmenu = document.getElementById('showMenu')

const search = document.getElementById('search')
const btnsearch = document.getElementById('showSearch')

const dropdown = document.getElementById('dropdown')
const btndropdown = document.getElementById('showDropdown')

btnmenu.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        menu.classList.add('block')
        }
    else{
        menu.classList.add('hidden')
        menu.classList.remove('block')
    }
})

btnsearch.addEventListener('click', ()=>{
    if(search.classList.contains('hidden')){
        search.classList.remove('hidden')
        search.classList.add('block')
        }
    else{
        search.classList.add('hidden')
        search.classList.remove('block')
    }
})
btndropdown.addEventListener('click', ()=>{
    if(dropdown.classList.contains('hidden')){
        dropdown.classList.remove('hidden')
        dropdown.classList.add('block')
        }
    else{
        dropdown.classList.add('hidden')
        dropdown.classList.remove('block')
    }
})