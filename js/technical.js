// declare 11 technicalconst
import { arr } from "./Register.js";
function techquiz() {
  const questions = [
    {
      question:
        "What is the output of the following code?\n\nconsole.log(1 + '1');",
      choice1: "11",
      choice2: "2",
      choice3: "undefined",
      choice4: "NaN",
      correct: "11"
    },
    {
      question:
        "What is the correct way to check if a variable is an array in JavaScript?",
      choice1: "typeof arr === 'array'",
      choice2: "arr instanceof Array",
      choice3: "Array.isArray(arr)",
      choice4: "arr.isArray()",
      correct: "Array.isArray(arr)"
    },
    {
      question:
        "What is the purpose of the 'use strict' directive in JavaScript?",
      choice1: "Enforces strict type checking",
      choice2: "Enables strict mode for the entire script",
      choice3: "Defines strict naming conventions",
      choice4: "Prevents memory leaks",
      correct: "Enables strict mode for the entire script"
    },
    {
      question:
        "What is the output of the following code?\n\nconsole.log(typeof null);",
      choice1: "null",
      choice2: "undefined",
      choice3: "object",
      choice4: "string",
      correct: "object"
    },
    {
      question:
        "Which method is used to remove the last element from an array in JavaScript?",
      choice1: "pop()",
      choice2: "push()",
      choice3: "shift()",
      choice4: "unshift()",
      correct: "pop()"
    },
    {
      question: "What does the isNaN() function do?",
      choice1: "Checks if a value is not a number",
      choice2: "Converts a string to a number",
      choice3: "Checks if a value is a number",
      choice4: "Rounds a number to the nearest integer",
      correct: "Checks if a value is not a number"
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      choice1: "Refers to the current function",
      choice2: "Refers to the previous object",
      choice3: "Refers to the next object",
      choice4: "Refers to the current object",
      correct: "Refers to the current object"
    },
    {
      question:
        "What is the output of the following code?\n\nconsole.log(2 + 2 * 2);",
      choice1: "8",
      choice2: "6",
      choice3: "4",
      choice4: "2",
      correct: "6"
    },
    {
      question: "What is the purpose of the 'new' keyword in JavaScript?",
      choice1: "Creates a new function",
      choice2: "Creates a new object",
      choice3: "Creates a new array",
      choice4: "Creates a new variable",
      correct: "Creates a new object"
    },
    {
      question:
        "Which method is used to join two or more arrays in JavaScript?",
      choice1: "concat()",
      choice2: "join()",
      choice3: "slice()",
      choice4: "splice()",
      correct: "concat()"
    },
    {
      question:
        "What is the output of the following code?\n\nconsole.log(2 === '2');",
      choice1: "true",
      choice2: "false",
      choice3: "undefined",
      choice4: "null",
      correct: "false"
    },
    {
      question: "What is JavaScript?",
      choice1: "A programming language for creating dynamic websites",
      choice2: "A database management system",
      choice3: "An operating system",
      choice4: "A text editor",
      correct: "A programming language for creating dynamic websites"
    },
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      choice1: "var = myVariable;",
      choice2: "variable myVariable;",
      choice3: "var myVariable;",
      choice4: "myVariable = var;",
      correct: "var myVariable;"
    },
    {
      question: "How do you write a comment in JavaScript?",
      choice1: "<!-- This is a comment -->",
      choice2: "// This is a comment",
      choice3: "/* This is a comment */",
      choice4: "This is a comment",
      correct: "// This is a comment"
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      choice1: "String",
      choice2: "Number",
      choice3: "Boolean",
      choice4: "Array",
      correct: "Array"
    },

    {
      question: 'What is the correct syntax for a "for" loop in JavaScript?',
      choice1: "for (i = 0; i <= 5; i++)",
      choice2: "for (i <= 5; i++)",
      choice3: "for (i = 0; i <= 5)",
      choice4: "for (i <= 5)",
      correct: "for (i = 0; i <= 5; i++)"
    },

    //------------------------------------------------ahnmad

    // -------------------------------------layth
    {
      question:
        "How do you add an element to the end of an array in JavaScript?",
      choice1: "array.add(element);",
      choice2: "array.insert(element);",
      choice3: "array.push(element);",
      choice4: "array.append(element);",
      correct: "array.push(element);"
    },
    {
      question: 'What does the "typeof" operator do in JavaScript?',
      choice1: "Checks if a variable is defined",
      choice2: "Returns the data type of a variable",
      choice3: "Converts a string to a number",
      choice4: "Executes a function",
      correct: "Returns the data type of a variable"
    },
    {
      question: "How do you select an HTML element by its ID in JavaScript?",
      choice1: "#elementID",
      choice2: 'getElementByID("elementID")',
      choice3: '.getElementByID("elementID")',
      choice4: 'document.getElementById("elementID")',
      correct: 'document.getElementById("elementID")'
    },

    {
      question:
        "Which function is used to parse a string as an integer in JavaScript?",
      choice1: "parseInt()",
      choice2: "parseFloat()",
      choice3: "toInteger()",
      choice4: "parseInteger()",
      correct: "55"
    },
    {
      question: "How do you create a new object in JavaScript?",
      choice1: "new object();",
      choice2: "Object.create();",
      choice3: "Object.new();",
      choice4: "Converts a value to a boolean",
      correct: "parseInt()"
    },
    {
      question:
        "Which method is used to remove the last element from an array in JavaScript?",
      choice1: "Checks if two values are equal",
      choice2: "array.removeLast();",
      choice3: "array.deleteLast();",
      choice4: "array.pop();",
      correct: "array.pop();"
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      choice1: "Checks if two values are equal",
      choice2: "Checks if two values are not equal",
      choice3: "Assigns a value to a variable",
      choice4: "Converts a value to a boolean",
      correct: "Checks if two values are equal"
    },
    {
      question: "How do you write an 'if' statement in JavaScript?",
      choice1: "if (condition) { code }",
      choice2: "if (condition) then { code }",
      choice3: "if condition then { code }",
      choice4: "Prints a message to the console",
      correct: "if (condition) { code }"
    },

    {
      question: "What is the purpose of the 'return' statement in a function?",
      choice1: "Terminates the function and returns a value",
      choice2: "Declares a new variable",
      choice3: "undefined",
      choice4: "Prints a message to the console",
      correct: "Terminates the function and returns a value"
    },

    {
      question:
        "Which method is used to remove an element from an array in JavaScript?",
      choice1: "array.remove(element);",
      choice2: "array.delete(element);",
      choice3: "array.splice(element);",
      choice4: "array.pop(element);",
      correct: "array.splice(element);"
    },

    {
      question: "How do you convert a string to lowercase in JavaScript?",
      choice1: "str.lowercase();",
      choice2: "str.toLower();",
      choice3: "str.toLowerCase();",
      choice4: "str.convertToLower();",
      correct: "str.toLowerCase();"
    },

    {
      question: 'What is the purpose of the "this" keyword in JavaScript?',
      choice1: "Refers to the current JavaScript file",
      choice2: "Refers to the previous element in an array",
      choice3: "Refers to the parent object of a method",
      choice4: "Refers to a reserved keyword in JavaScript",
      correct: "Refers to the parent object of a method"
    },
    {
      question: 'What does the "setTimeout()" function do in JavaScript?',
      choice1: "Suspends the execution of the script",
      choice2: "Delays the execution of a function",
      choice3: 'Clears a timer set with "setInterval()"',
      choice4: "Sets a recurring timer for a function",
      correct: "Delays the execution of a function"
    },

    {
      question:
        "How do you check if an element exists in an array in JavaScript?",
      choice1: "array.exists(element);",
      choice2: "array.contains(element);",
      choice3: "array.indexOf(element) !== -1;",
      choice4: "array.check(element);",
      correct: "array.indexOf(element) !== -1;"
    }
  ];
  //these variables to get score`s correct questions
  let socreArray = [];
  let score = 0;

  // to get 15 questions randomly from the pool of questions
  let randomIndex = [];
  randomIndex.length = 10;
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
      if (i < 10) {
        for (let j = 1; j < 5; j++) {
          $(`#btn-${j}`).text(questions[randomIndex[i]][keys[j]]);
          $(".title").text(
            questions[randomIndex[i]][keys[j - (keys.length - 2)]]
          );
        }
        $(".title").text(questions[randomIndex[i]]["question"]);
        i++;

        if (i == 10) {
          $(".next").text("submit");
        }
        event.preventDefault();
      } else {
        // window.open('./report.html')
        let index = sessionStorage.getItem("index");
        arr[index].techResult = score;
        localStorage.setItem("Users", JSON.stringify(arr));
        window.open("../Home.html", "_self");
        event.preventDefault();
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
      getValue();
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

let tech = document.getElementById("techquiz");
if (tech !== null) {
  tech.addEventListener("load", techquiz());
}
// function changeColor(){
//   var selected_item = "";
//   for(let i = 0 ; i <= $(".QBoxAnsser").length ; i++){
//     $(`#btn-${i}`).on('click', function(event) {
//       // Remove 'selected' class from previously selected item
//       if (selected_item !== "") {
//         selected_item.removeClass('change-color');
//       }
//       // Add 'selected' class to newly clicked item
//       $(event.target).addClass('change-color');
//       // Store reference to newly clicked item
//       selected_item = $(event.target);
//     });
//     $('.next').on("click",function(){
//       $(`#btn-${i}`).classList.removeClass("change-color")
//     })
//   }
// }
// changeColor()
