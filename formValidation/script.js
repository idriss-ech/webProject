let nameError = document.getElementById('nameError')

function validateName(){
    let fullname = document.getElementById('fullname').value;
    if(fullname.length == 0){
        nameError.innerHTML = 'full name is required'
        return false;
    }
    if(!fullname.match(`^[a-zA-Z'-]+(?: [a-zA-Z'-]+)+$`)){
        nameError.innerHTML = 'enter a valid full name'
        return false;
    }
    nameError.innerHTML = '<i style="color:rgb(3, 133, 25)" class="fa-solid fa-circle-check"></i>'
    return true;
}
let phoneError = document.getElementById('phoneError')

function validatePhone(){
    let phone = document.getElementById('phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'phone is required'
        return false;
    }
    const regexSimple = /^\d{10}$/;

    if(!phone.match(regexSimple)){
        phoneError.innerHTML = 'enter a valid phone'
        return false;
    }
    phoneError.innerHTML = '<i style="color:rgb(3, 133, 25)" class="fa-solid fa-circle-check"></i>'
    return true;
}
let emailError = document.getElementById('emailError')

function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = 'email is required'
        return false;
    }
    const regexEmail = /^[a-zA-Z0-9._%+-]+@gmail+\.[a-zA-Z]{2,}$/;


    if(!email.match(regexEmail)){
        emailError.innerHTML = 'enter a valid email'
        return false;
    }
    emailError.innerHTML = '<i style="color:rgb(3, 133, 25)" class="fa-solid fa-circle-check"></i>'
    return true;
}
let formError = document.getElementById('formError')

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() ){
        formError.innerHTML = 'Invalid Form'
        setTimeout(() => {
            formError.innerHTML = ''
            
        }, 2000);
        return false;
    }
    return true;
}