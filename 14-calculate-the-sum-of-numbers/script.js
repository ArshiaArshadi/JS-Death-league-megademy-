


// select element
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("output");

// create varable
let arrayNumber = [];
let sum = 0;

// add event for get user input
submit.addEventListener("click", sumNumber)


// create function to add the numbers as stated in the challenge
function sumNumber (){
    let inputNumber = input.value;
    
    // 
    for (let i = 0; i <= inputNumber; i++) {
      numbers.push(i);
    }
    numbers.forEach((element) => {
      sum = sum + element;
    });
    output.append(`the answer is ${sum}`);
}