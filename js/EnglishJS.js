// declare 30 English questions
import { arr } from "./Register.js";

export function que() {
  const questions = [
    {
      question: "Choose the correct form of the verb to complete the sentence: 'She _____ to the store yesterday.'",
      choice1: "go",
      choice2: "goes",
      choice3: "went",
      choice4: "gone",
      correct: "went"
    },
    {
      question: "Identify the correct sentence:",
      choice1: "I am going to the movies tomorrow.",
      choice2: "Me is going to the movies tomorrow.",
      choice3: "Myself is going to the movies tomorrow.",
      choice4: "I are going to the movies tomorrow.",
      correct: "I am going to the movies tomorrow."
    },
    {
      question: "What is the comparative form of the adjective 'good'?",
      choice1: "gooder",
      choice2: "better",
      choice3: "best",
      choice4: "goodest",
      correct: "better"
    },
    {
      question: "Choose the correct possessive pronoun:",
      choice1: "me's",
      choice2: "yours",
      choice3: "their",
      choice4: "she",
      correct: "yours"
    },
    {
      question: "What is the plural form of the noun 'child'?",
      choice1: "childs",
      choice2: "childen",
      choice3: "children",
      choice4: "childies",
      correct: "children"
    },
    {
      question: "Select the correct sentence:",
      choice1: "He don't like ice cream.",
      choice2: "He doesn't likes ice cream.",
      choice3: "He doesn't like ice cream.",
      choice4: "He don't likes ice cream.",
      correct: "He doesn't like ice cream."
    },
    {
      question: "Choose the synonym for 'happy':",
      choice1: "sad",
      choice2: "angry",
      choice3: "joyful",
      choice4: "tired",
      correct: "joyful"
    },
    {
      question: "Identify the adverb in the sentence: 'She sings beautifully.'",
      choice1: "sings",
      choice2: "beautifully",
      choice3: "she",
      choice4: "the",
      correct: "beautifully"
    },
    {
      question: "What is the past tense of the verb 'go'?",
      choice1: "goed",
      choice2: "went",
      choice3: "gone",
      choice4: "going",
      correct: "went"
    },
    {
      question: "Choose the correct sentence:",
      choice1: "They is going to the park.",
      choice2: "They are going to the park.",
      choice3: "They am going to the park.",
      choice4: "They be going to the park.",
      correct: "They are going to the park."
    },
    {
      question: "Choose the antonym for the word 'small':",
      choice1: "big",
      choice2: "tiny",
      choice3: "little",
      choice4: "huge",
      correct: "big"
    },
    {
      question: "What is the comparative form of the adjective 'happy'?",
      choice1: "happyer",
      choice2: "more happy",
      choice3: "happier",
      choice4: "most happy",
      correct: "happier"
    },
    {
      question: "Choose the correct spelling:",
      choice1: "ocasion",
      choice2: "occassion",
      choice3: "occasion",
      choice4: "occaision",
      correct: "occasion"
    },
    {
      question: "Identify the correct form of the verb to complete the sentence: 'They _____ to the beach every summer.'",
      choice1: "go",
      choice2: "goes",
      choice3: "went",
      choice4: "gone",
      correct: "go"
    },
    {
      question: "What is the superlative form of the adjective 'good'?",
      choice1: "gooder",
      choice2: "better",
      choice3: "best",
      choice4: "goodest",
      correct: "best"
    },
    {
      question: "Choose the correct pronoun to complete the sentence: '_____ is my best friend.'",
      choice1: "Me",
      choice2: "I",
      choice3: "My",
      choice4: "Mine",
      correct: "She"
    },
    {
      question: "What is the plural form of the noun 'mouse'?",
      choice1: "mouses",
      choice2: "mices",
      choice3: "mouse",
      choice4: "mice",
      correct: "mice"
    },
    {
      question: "Select the correct sentence:",
      choice1: "He don't have a car.",
      choice2: "He doesn't have a car.",
      choice3: "He don't has a car.",
      choice4: "He doesn't has a car.",
      correct: "He doesn't have a car."
    },
    {
      question: "Choose the synonym for 'angry':",
      choice1: "happy",
      choice2: "sad",
      choice3: "mad",
      choice4: "tired",
      correct: "mad"
    },
    {
      question: "Identify the adverb in the sentence: 'They quickly ran to catch the bus.'",
      choice1: "quickly",
      choice2: "ran",
      choice3: "they",
      choice4: "catch",
      correct: "quickly"
    },
    {
      question: "What is the past tense of the verb 'eat'?",
      choice1: "ate",
      choice2: "eaten",
      choice3: "eat",
      choice4: "eating",
      correct: "ate"
    },
    {
      question: "Choose the correct sentence:",
      choice1: "You is my best friend.",
      choice2: "You are my best friend.",
      choice3: "You am my best friend.",
      choice4: "You be my best friend.",
      correct: "You are my best friend."
    },
    {
      question: "Choose the antonym for the word 'hot':",
      choice1: "warm",
      choice2: "cold",
      choice3: "cool",
      choice4: "chilly",
      correct: "cold"
    },
    {
      question: "What is the comparative form of the adjective 'small'?",
      choice1: "smaller",
      choice2: "more small",
      choice3: "smallest",
      choice4: "most small",
      correct: "smaller"
    },
    {
      question: "Choose the correct spelling:",
      choice1: "apparant",
      choice2: "apperrant",
      choice3: "aparant",
      choice4: "apparent",
      correct: "apparent"
    },
    {
      question: "Identify the correct form of the verb to complete the sentence: 'He _____ soccer every weekend.'",
      choice1: "play",
      choice2: "plays",
      choice3: "played",
      choice4: "playing",
      correct: "plays"
    },
    {
      question: "What is the superlative form of the adjective 'happy'?",
      choice1: "happyer",
      choice2: "more happy",
      choice3: "happiest",
      choice4: "most happy",
      correct: "happiest"
    },
    {
      question: "Choose the correct pronoun to complete the sentence: '_____ is going to the party.'",
      choice1: "Me",
      choice2: "I",
      choice3: "My",
      choice4: "Mine",
      correct: "I"
    },
    {
      question: "What is the plural form of the noun 'child'?",
      choice1: "childs",
      choice2: "childen",
      choice3: "children",
      choice4: "childies",
      correct: "children"
    },
    {
      question: "Select the correct sentence:",
      choice1: "She don't like chocolate.",
      choice2: "She doesn't likes chocolate.",
      choice3: "She doesn't like chocolate.",
      choice4: "She don't likes chocolate.",
      correct: "She doesn't like chocolate."
    },
    {
      question: "Choose the synonym for 'sad':",
      choice1: "happy",
      choice2: "angry",
      choice3: "joyful",
      choice4: "miserable",
      correct: "miserable"
    },
    {
      question: "Identify the adverb in the sentence: 'He sings loudly.'",
      choice1: "sings",
      choice2: "loudly",
      choice3: "he",
      choice4: "the",
      correct: "loudly"
    },
    {
      question: "What is the past tense of the verb 'run'?",
      choice1: "runned",
      choice2: "run",
      choice3: "ran",
      choice4: "running",
      correct: "ran"
    },
    {
      question: "Choose the correct sentence:",
      choice1: "We is going to the park.",
      choice2: "We are going to the park.",
      choice3: "We am going to the park.",
      choice4: "We be going to the park.",
      correct: "We are going to the park."
    },
    {
      question: "Choose the antonym for the word 'big':",
      choice1: "small",
      choice2: "tiny",
      choice3: "little",
      choice4: "huge",
      correct: "small"
    }
  ];
  
  //these variables to get score`s correct questions
  let socreArray = [];
  let score = 0;

  // to get 15 questions randomly from the pool of questions
  let randomIndex = [];
  randomIndex.length = 15;
  function shuffle() {
    for (var i = 0; i < randomIndex.length; i++) {
      var ran = Math.floor(Math.random() * questions.length);
      while (randomIndex.includes(ran)) {
        ran = Math.floor(Math.random() * questions.length);
      }
      randomIndex[i] = ran;
      // console.log(questions[randomIndex[i]].question);
      console.log(questions[randomIndex[i]]["question"]);
    }
  }
  shuffle();

  //get key`s object
  let keys = Object.keys(questions[0]);
  console.log(keys);
  //set first questions & choice
  function setFirstValue() {
    $(".title").text(questions[randomIndex[0]][keys[0]]);

    for (let j = 1; j <= 4; j++) {
      $(`#btn-${j}`).text(questions[randomIndex[0]][keys[j]]);
    }
  }
  setFirstValue();
  // counter for question
  var i = 1;
  //set choice and questions isnide  website
  function setChoice() {
    $(".next").on("click", function (event) {
      if (i < 15) {
        for (let j = 1; j < 5; j++) {
          $(`#btn-${j}`).text(questions[randomIndex[i]][keys[j]]);
          //  $(".title").text(questions[randomIndex[i]][keys[0]]);
        }
        $(".title").text(questions[randomIndex[i]]["question"]);
        i++;
        if (i == 15) {
          $(".next").text("submit");
        }
        event.preventDefault();
      } else {
        // window.open('./report.html')
        event.preventDefault();
        let index = sessionStorage.getItem("index");
        arr[index].EnRuslt = score;
        localStorage.setItem("Users", JSON.stringify(arr));
        console.log(arr);
        console.log(arr[index].EnRuslt);
        console.log(sessionStorage.getItem("index"));
        window.open("../Home.html", "_self");
      }
    });
  }

  setChoice();

  // function to get correct answers
  let correctChoice = [];
  function correctAnswer() {
    for (let i = 0; i < randomIndex.length; i++) {
      correctChoice.push(questions[randomIndex[i]]["correct"]);
    }
    // print the correct choices
    console.log(correctChoice);
  }
  correctAnswer();

  //Timer Quiz 12 minutes
  let counter = setInterval(Timer, 1000);
  function Timer() {
    let second = document.querySelector("#sec");
    let minutes = document.querySelector("#min");

    if (minutes.innerHTML <= 0 && second.innerHTML <= 0) {
      clearInterval(counter);
      // Stop the task
      let index = sessionStorage.getItem("index");
      arr[index].EnRuslt = score;
      localStorage.setItem("Users", JSON.stringify(arr));
      window.open("../Home.html", "_self");
      return;
    }
    if (second.innerHTML == 0) {
      second.innerHTML = 60;
      minutes.innerHTML -= 1;
    }
    second.innerHTML -= 1;
  }

  function getValue() {
    $(".QBoxAnsser").on("click", function (event) {
      for (let i = 0; i < correctChoice.length; i++) {
        if ($(event.target).text() === correctChoice[i]) {
          // console.log($(event.target).text() + ' correct')
          if (!socreArray.includes($(event.target).text())) {
            socreArray.push($(event.target).text());
            score += 1;
          }
        }
      }
      // console.log(score)
      // console.log(socreArray)
      event.preventDefault();
    });
    $(".next").on("click", function (event) {
      getValue(); //get correct answer
      event.preventDefault();
    });
  }

  getValue();

  // Change Color in choice
  function changeColor() {
    $(".QBoxAnsser").on("click", function (event) {
      $(event.target).addClass("change-color");
    });
    $(".QBoxAnsser").on("click", function (event) {
      $(".QBoxAnsser").removeClass("change-color");
      $(event.target).addClass("change-color");
    });
    $(".next").on("click", function () {
      $(".QBoxAnsser").removeClass("change-color");
    });
  }
  changeColor();
}
let ent = document.getElementById("engtest");
if (ent !== null) {
  ent.addEventListener("load", que());
}
