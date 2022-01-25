// Questions from JS Quiz on W3Schools 
// https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var questions = [
    {
      title: "Inside which HTML element do we put the JavaScript?",
      choices: [
          "<javascript>", 
          "<js>", 
          "<script>", 
          "<scripting"
        ],
      answer: "<script>"
    },
    // {
    //     title: "Where is the correct place to insert a JavaScript?",
    //     choices: [
    //         "Both the <head> section and the <body> section are correct", "The <head> section", 
    //         "The <body section>"
    //     ],
    //     answer: "Both the <head> section and the <body> section are correct"
    // },
    // {
    //     title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    //     choices: [
    //         "<script href='xxx.js'>", 
    //         "<script src='xxx.js'>", 
    //         "<script name='xxx.js'>"
    //     ],
    //     answer: "<script src='xxx.js'>"
    // },
    // {
    //     title: "The external JavaScript file must contain the <script> tag.",
    //     choices: [
    //         "False", 
    //         "True"
    //     ],
    //     answer: "False"
    // },
    // {
    //     title: "How do you write 'Hello World' in an alert box?",
    //     choices: [
    //         "msgBox('Hello World');", 
    //         "msg('Hello World');", 
    //         "alert('Hello World');", 
    //         "alertBox('Hello World');"
    //     ],
    //     answer: "alert('Hello World');"
    // },
    // {
    //     title: "How do you create a function in JavaScript?",
    //     choices: [
    //         "function:myFunction()", 
    //         "function = myFunction()", 
    //         "function myFunction()"
    //     ],
    //     answer: "function myFunction()"
    // },
    // {
    //     title: "How do you call a function named 'myFunction'?",
    //     choices: [
    //         "call function myFunction()", 
    //         "myFunciton()", 
    //         "call myFunction"
    //     ],
    //     answer: "myFunciton()"
    // },
    // {
    //     title: "How to write an IF statement in JavaScript?",
    //     choices: [
    //         "if (i == 5)", 
    //         "if i = 5 then", 
    //         "if i == 5 then", 
    //         "if i = 5"
    //     ],
    //     answer: "if (i==5)"
    // },
    // {
    //     title: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    //     choices: [
    //         "if (i <> 5)", 
    //         "if i =! 5 then", 
    //         "if (i != 5)", 
    //         "if i <> 5"
    //     ],
    //     answer: "if (i !=5 )"
    // },
    // {
    //     title: "How does a WHILE loop start?",
    //     choices: [
    //         "while i = 1 to 10", 
    //         "while (1 <= 10)", 
    //         "while (i <= 10; i++)"
    //     ],
    //     answer: "while (1 <= 10)"
    // },
    // {
    //     title: "How does a FOR loop start?",
    //     choices: [
    //         "for i = 1 to 5", 
    //         "for (i <= 5; i++)", 
    //         "for (i = 0; i <= 5; i++)", 
    //         "for (i = 0; i <= 5)"
    //     ],
    //     answer: "for (i = 0; i <= 5; i++)"
    // },
    // {
    //     title: "How can you add a comment in a JavaScript?",
    //     choices: [
    //         "//This is a comment", 
    //         "'This is a comment'", 
    //         "<!--This is a comment-->"
    //     ],
    //     answer: "//This is a comment"
    // },
    // {
    //     title: "What is the correct way to write a JavaScript array?",
    //     choices: [
    //         "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", 
    //         "var colors = (1:'red', 2:'green', 3'blue')", 
    //         "var colors = ['red','green','blue']", 
    //         "var colors = 'red','green','blue'"
    //     ],
    //     answer: "var colors = ['red','green','blue']"
    // },
    // {
    //     title: "How do you round the number 7.25, to the nearest integer?",
    //     choices: [
    //         "round(7.25)", 
    //         "Math.round(7.25)", 
    //         "rnd(7.25)", 
    //         "Math.rnd(7.25)"
    //     ],
    //     answer: "Math.round(7.25)"
    // },
    // {
    //     title: "How do you find the number with the highest value of x and y?",
    //     choices: [
    //         "top(x,y)", 
    //         "ceil(x,y)", 
    //         "Math.max(x,y)", 
    //         "Math.ceil(x,y)"
    //     ],
    //     answer: "Math.max(x,y)"
    // },
    // {
    //     title: "What is the correct JavaScript syntax for opening a new window called 'w' ?",
    //     choices: [
    //         "w2 = window.open('www.google.com')", 
    //         "w2 = window.new('www.google.com')"
    //     ],
    //     answer: "w2 = window.open('www.google.com')"
    // },
    // {
    //     title: "JavaScript is the same as Java.",
    //     choices: [
    //         "True", 
    //         "False"
    //     ],
    //     answer: "False"
    // },
    // {
    //     title: "How can you detect the client's browser name?",
    //     choices: [
    //         "client.navName", 
    //         "browser.name", 
    //         "navigator.appName"
    //     ],
    //     answer: "navigator.appName"
    // },
    // {
    //     title: "Which event occurs when the user clicks on an HTML element?",
    //     choices: [
    //         "onmouseclick", 
    //         "onmouseover", 
    //         "onclick", 
    //         "onchange"
    //     ],
    //     answer: "onclick"
    // },
    // {
    //     title: "How do you declare a JavaScript variable?",
    //     choices: [
    //         "v carName;", 
    //         "var carName;", 
    //         "variable carName"
    //     ],
    //     answer: "var carName;"
    // },
    // {
    //     title: "Which operator is used to assign a value to a variable?",
    //     choices: [
    //         "x", 
    //         "=", 
    //         "*", 
    //         "-"
    //     ],
    //     answer: "="
    // },
    // {
    //     title: "What will the following code return: Boolean(10 > 9)",
    //     choices: [
    //         "false", 
    //         "NaN", 
    //         "true"
    //     ],
    //     answer: "true"
    // },
    // {
    //     title: "Is JavaScript case-sensitive?",
    //     choices: [
    //         "Yes", 
    //         "No"
    //     ],
    //     answer: "Yes"
    // }
];