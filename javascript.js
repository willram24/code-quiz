// Object array of questions and answers
let questions = [
  {
    question: "q",
    answer1: "a1",
    answer2: "a2",
    answer3: "a3",
    answer4: "a4"
  },
  {
    question: "q",
    answer1: "a1",
    answer2: "a2",
    answer3: "a3",
    answer4: "a4"
  },
  {
    question: "q",
    answer1: "a1",
    answer2: "a2",
    answer3: "a3",
    answer4: "a4"
  },
  {
    question: "q",
    answer1: "a1",
    answer2: "a2",
    answer3: "a3",
    answer4: "a4"
  },
  {
    question: "q",
    answer1: "a1",
    answer2: "a2",
    answer3: "a3",
    answer4: "a4"
  }
];
let i = 0

const render = () => document.getElementById('begin').addEventListener('click',event => {
  event.preventDefault()
  document.getElementById('quiz').innerHTML =
  `<h2>
   "${}
   </h2>
   <p><button>answer1</button></p>
   <p><button>answer2</button></p>
   <p><button>answer1</button></p>
   <p><button>answer2</button></p>`
})