
function addToDoList(){
    let title = document.getElementById('toDoListTitle').value;

    if(title === ''){
        alert('Please enter a task')
        return;
    }

    let toDoList = document.querySelector('.toDoList').cloneNode(true);
    let toDoListTitle = toDoList.querySelector('.toDoTitle').textContent=title;
    let toDo = document.getElementById('boxs').appendChild(toDoList);

    let removeItem = toDoList.querySelector('.toDoListRemove')
    removeItem.addEventListener('click', function(){
        toDoList.remove();
    })

}

