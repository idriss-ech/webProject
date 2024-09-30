
const container = document.getElementById('container')

const successMsg = '<i class="success-icon fa-solid fa-circle-check fa-xl"></i> <span>Success!</span> Your operation was completed successfully."'
const errorMsg = '<i class="error-icon fa-solid fa-triangle-exclamation fa-xl"></i> <span>Oops!</span> Something went wrong. Please try again.'
const invalidMsg = '<i class="invalid-icon fa-solid fa-circle-exclamation fa-xl"></i> <span>Oops!</span> Invalid information entered. Please check and try again.'
const infoMsg = '<i class="infos-icon fa-solid fa-circle-info fa-xl"></i> <span>Info:</span> Your settings have been updated.'
function toast(msg,type){
    let div = document.createElement('div');
    div.innerHTML= msg
    div.classList.add('toast',type);
    container.appendChild(div);
    setTimeout(() => {
        div.remove()
    }, 4000);
}