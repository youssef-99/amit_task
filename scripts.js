const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  }, // 0
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  }, // 1
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  }, // 2
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  }, // 3
];

const quiz = document.getElementsByClassName("container");
const questionHeader = document.getElementById("question-header");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");

const answerElements = [aText, bText, cText, dText];
const submitBtn = document.getElementById("submit");

let score = 0;
let currentQuestion = 0;

// 1- loop on quizdata
// 2- populate current question in header & input
// 3- on submit -> evaluate answer === correct
// 4- id answer === correct => score++
// 5- check lenght - 1 of list is equal current question => display result else => current question ++
// 6- 2

function loadQuiz() {
  // load questions
  // check current question and list length
  loadQuestion(quizData[currentQuestion]);
}

function loadQuestion(question) {
  // populate current question in header & input
  questionHeader.innerText = question.question;
  aText.innerText = question.a;
  bText.innerText = question.b;
  cText.innerText = question.c;
  dText.innerText = question.d;

  setSelectedFalse();
}

loadQuiz();

function setSelectedFalse() {
  answerElements.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  console.log("clicked");
  console.log(getSelected());
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion(quizData[currentQuestion]);
    } else {
      quiz.innerText = `
        <h2>You answered ${score}/${quizData.length} questions </h2>
      `;
    }
  }
});
