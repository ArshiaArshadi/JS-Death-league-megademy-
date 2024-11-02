// Identifying odd and even numbers *11*

// ------------------------------

// create variable 
let numberValue 

// Using a loop to get an integer value from the user
while (true){
    // get user input with prompt
    let getInputValue = prompt("Enter the desired number")


    // Checking the numeric value of the input with the condition
    if ( getInputValue === null || getInputValue !== Number ) {
        continue
    } else{
        numberValue = getInputValue
        break
    }

}


// Checking whether it is even or odd
if (numberValue % 2 !== 0 ){

    // Check for odd
    document.body.innerHTML = `Your number is odd`;
    
}else {

    // Check for even
    document.body.innerHTML = `Your number is even`;

}