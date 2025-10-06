///////Create a function to read a string of the form:
// factors : multiples
//and output a string:
// result : factors : multiples

//where factors and multiples are space separated lists of integers

// Example Input : 
// 3 5 : 1 2 3 4 5 6 7 8 9

// Example Output : 
// 23 : 3 5 : 1 2 3 4 5 6 7 8 9

//keep code DRY (Don't repeat yourself)

//if you're finished, code it into a page


// Function to calculate Sum of Multiples for the arrays
let eulerArrayCustom = (arr, list) => {

    let sum = list
    .filter(n => arr.some(m => n % m === 0))
    .reduce((a, b) => a + b, 0);

    return sum
}

// const questionString = "3 5 : 1 2 3 4 5 6 7 8 9"


// Function to take "3 5 : 1 2 3 4 5 6 7 8 9" and calculate
const ex4result = (questionString) =>{
    const multipleString = questionString.split(":")[0].split('  ').toString('').trimEnd().split(' ').map(n=>parseInt(n));
    const listString = questionString.split(":")[1].split('  ').toString('').trimStart().split(' ').map(n=>parseInt(n));

    const result = eulerArrayCustom (multipleString, listString)

    return result
}

//Callback function for onClick function
const ex4Display = () => {
    const a = document.getElementById("arrList").value
        const answer = ex4result(a)
        alert(`The answer to the sum of multiples is ${answer}`)
}