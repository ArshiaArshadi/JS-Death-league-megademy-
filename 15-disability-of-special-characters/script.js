
let output = document.querySelector("#output");
let input = document.querySelector("#input");
let submit = document.querySelector("#submit");

// define the available symbols in a list

let symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "~",
    ".",
    "+",
    "=",
    "?",
    "_",
    "-",
    "/",
    "<",
    "|",
  ];
  
  
  let words = [];
  let counter = 0;
  submit.addEventListener("click", () => {
    output.textContent = "";
    counter = 0;
    let inputVal = input.value;
    words = inputVal.split("");
    words.forEach((element) => {
      if (symbol.includes(element)) {
        counter += 1;
      }
    });
    output.append(`the number of symbol is: ${counter}`);
    input.value = "";
  });
  