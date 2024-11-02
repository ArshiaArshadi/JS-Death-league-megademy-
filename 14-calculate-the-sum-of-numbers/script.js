




let input = document.getElementById("#input");
let output = document.getElementById("#output");
let submit = document.querySelector("#submit");
let numbers = [];
let sum = 0;
submit.addEventListener("click", () => {
  let inputVal = input.value;
  for (let i = 0; i <= inputVal; i++) {
    numbers.push(i);
  }
  numbers.forEach((element) => {
    sum = sum + element;
  });
  output.append(`the answer is ${sum}`);
});
