const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = uppercase.toLowerCase();
const number = '1234567890';
const symbol = '!@#$%^&*()_+=}"{:?><,.'

const lenght = 10;

const generatePassword = ()=>{
    let password = ''
    for(let i=0; i<3; i++){
        password += uppercase[Math.floor(Math.random()*uppercase.length)]
        password += lowercase[Math.floor(Math.random()*lowercase.length)]
        password += number[Math.floor(Math.random()*number.length)]
        password += symbol[Math.floor(Math.random()*symbol.length)]
    }
    let psw = ''
    for(let i=0;i<lenght;i++){
        psw += password[Math.floor(Math.random()*password.length)] 
    }
     return psw;  
}

document.getElementById('generateBtn').addEventListener('click',()=>{
    document.getElementById('password').value = generatePassword();
})


function copy(){
    const inputField = document.getElementById('password');

    // Select the text in the input field
    inputField.select();
    inputField.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text to the clipboard
    try {
        navigator.clipboard.writeText(inputField.value)
        .then(() => {
                document.querySelector('.box').style.display= 'block'
                setTimeout(() => {
                    document.querySelector('.box').style.display= 'none'
                }, 3000);
               
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    } catch (err) {
        console.error('Clipboard API not supported: ', err);
    }
}