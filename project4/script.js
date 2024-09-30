const content = document.getElementById('dropDownContent')
const element = document.body

content.style.display='none'


function dropDown(){
    if(content.style.display=='none' || content.style.display==''){
            content.style.display='block'
    }
    else{
        content.style.display='none'
    }
}


function changeMode(){
        element.classList.toggle('dark')
        mode ='dark'
   
}