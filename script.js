// Creat variables to accept birth year and current year user input
const birthYear = parseInt(prompt("Enter birth year: "));
const currentYear = parseInt(prompt("Enter current year: "));
// create an substration function
function substration() {
    // The substration function will return the substration for input a and b
    return currentYear - birthYear;

}

// Invoke substration function to run the calculator
console.log(substration());