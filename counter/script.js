
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let icon3 = document.getElementById('icon3');
  let n1 = 97
  let n2 = 198
  let n3 = 308

 let index1 = 0; 
 let index2 = 0; 
 let index3 = 0; 
function start(){
    console.log('start')
    timer = setInterval(() => {
        if(index1==n1){
            clearInterval(timer)
            return;
        }
        index1++;
        number1.textContent = index1; 
  },8);
    timer2= setInterval(() => {
        if(index2==n2){
            clearInterval(timer2)
            return;
        }
        index2++;
        number2.textContent = index2; 
  },8);
    timer3 = setInterval(() => {
        if(index3==n3){
            clearInterval(timer3)
            return;
        }
        index3++;
        number3.textContent = index3; 
  },8);
}

function like(){
    number1.textContent = parseInt(number1.textContent) + 1;
    icon(icon1)
}
function comment(){
    number2.textContent = parseInt(number2.textContent) + 1;
    icon(icon2)

}
function save(){
    number3.textContent = parseInt(number3.textContent) + 1;
    icon(icon3)

}

function icon(item){
    console.log('hi')
    if(item.classList.contains('fa-regular')){
        item.classList.remove('fa-regular')
        item.classList.add('fa-solid')
    }
    else{
        item.classList.add('fa-regular')
        item.classList.remove('fa-solid')
    }
}

start();


 