const questions = [
    {
        question:"the question number 1 ?",
        answers:[
            {text:'answer1.1', correct:false},
            {text:'answer1.2', correct:false},
            {text:'answer1.3', correct:true},
            {text:'answer1.4', correct:false},
        ]
    },
    {
        question:"the question number 2 ?",
        answers:[
            {text:'answer2.1', correct:true},
            {text:'answer2.2', correct:false},
            {text:'answer2.3', correct:false},
            {text:'answer2.4', correct:false},
        ]
    },
    {
        question:"the question number 3 ?",
        answers:[
            {text:'answer3.1', correct:false},
            {text:'answer3.2', correct:false},
            {text:'answer3.3', correct:false},
            {text:'answer3.4', correct:true},
        ]
    }
];

const question = document.getElementById('question');
const answersBtn = document.getElementById('answersBtn');
const nextBtn = document.getElementById('nextBtn');

let questionIndex = 0;
let score = 0; 

function startQuiz(){
    questionIndex = 0; 
    score = 0; 
    nextBtn.textContent = 'Next'; 
    showQuestion();
    
 
}

function showQuestion(){
    const quest = questions[questionIndex];
    question.textContent = `${questionIndex+1}. ${quest.question}`
    while(answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild)
    }
    quest.answers.forEach(element => {
        const btn = document.createElement('button');
        btn.innerHTML = element.text;
        btn.classList.add('btn')
        answersBtn.appendChild(btn);
        if(element.correct === true) {
            btn.dataset.correct = element.correct;
        }
        btn.addEventListener('click', selectAnswer)
    });
    
}

function selectAnswer(e){
    const btn = e.target
    if(btn.dataset.correct==="true"){
        btn.classList.add('correct')
        score++;
    }
    else{
        btn.classList.add('incorrect')
    }

    Array.from(answersBtn.children).forEach(btn=>{
        if(btn.dataset.correct==="true"){
            btn.classList.add('correct')
        }
        btn.disabled = true;
    })
    nextBtn.style.display  = 'block' 
}
function handleNextClick() {
    questionIndex++;
    if (questionIndex < questions.length) {
        nextBtn.style.display = 'none';
        showQuestion();
    } else {
        nextBtn.textContent = 'Reset';
        question.style.display = 'none';
        answersBtn.innerHTML = `Your score is ${score}/${questions.length}`;
    }
}

// Add event listener to next button
nextBtn.addEventListener('click', () => {
    if (questionIndex < questions.length) {
        handleNextClick();
    } else {
        startQuiz();
    }
});

startQuiz();