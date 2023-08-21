const quiz = [
    {
        question: "What is the most used programming  language in 2023 ?",
        ans1text: "Java",
        ans2text: "C++",
        ans3text: "Python",
        ans4text: "JavaScript",
    },
    {
        question: "What is your Favroute Programming language ?",
        ans1text: "Java",
        ans2text: "Java & C++",
        ans3text: "Python",
        ans4text: "JavaScript",
    },
    {
        question: "what is your future goal in IT feild ?",
        ans1text: "Software Developer",
        ans2text: "Web Developer",
        ans3text: "Python Developer",
        ans4text: "Full Stack Developer",
    },
    {
        question: "Do you Know about Programming Language ?",
        ans1text: "Yse",
        ans2text: "No",
        ans3text: "Option A",
        ans4text: "Don't Know",
    },
    {
        question: "What is the most Popular programming language ?",
        ans1text: "Java",
        ans2text: "C++",
        ans3text: "Python",
        ans4text: "JavaScript",
    },
]
const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
const btn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

btn.addEventListener("click", () =>{
    const checkedAns = document.querySelector(`input[type="radio"]:checked `)
    
    if(checkedAns === null){
      alert("Please select the answer");
    }else{
        if(checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
           score++;
        }
        
        currentQuestion++
        
        if(currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your Score is " + score + "out of " + quiz.length);
        }
    }

});






