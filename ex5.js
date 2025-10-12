//   let parse=(i)=>{
//       o=parseInt(i)
//       if (isNaN(o))
//         throw("NaN");
//       return o;
//     }
    
//Create a modified version of ex4 that prepends "corrupt" where an error occurs

//Examples ()
// 2 3 5 67
// corrupt : 2 3 5 67

//Actually this one will not result in an error unless you throw one as in parse(i) above:
// 3 5 hello: 1 2 3 4 5 6 7 8 9
// corrupt : 3 5 hello: 1 2 3 4 5 6 7 8 9

//Create a further version that will output the answer omitting corrupted values
//or "corrupt" if it cannot be resolved

// 3 5 hello: 1 2 3 4 5 6 7 8 9
// 23 : 3 5 hello: 1 2 3 4 5 6 7 8 9

//this cannot be fixed - actually this is the only one that will throw errors
// 2 3 5 67
// corrupt : 2 3 5 67

// Function to calculate Sum of Multiples for the arrays
let eulerArrayC5 = (arr, list) => {

    let sum = list
    .filter(n => arr.some(m => n % m === 0))
    .reduce((a, b) => a + b, 0);

    return sum
}

// const questionString = "3 5 : 1 2 3 4 5 6 7 8 9"


// Function to take "3 5 : 1 2 3 4 5 6 7 8 9" and calculate
const ex5result = (questionString) =>{
    const multipleString = questionString.split(":")[0].split('  ').toString('').trimEnd().split(' ').map(n=>parseInt(n));
    const listString = questionString.split(":")[1].split('  ').toString('').trimStart().split(' ').map(n=>parseInt(n));
    
  try {
    console.log(multipleString)
    const checkNum = multipleString.some(x=>isNaN(x))
    
    if (checkNum) {
      throw "Mtcheew"
      return;
    } 
    console.log(checkNum)
    
    
    const result = eulerArrayC5 (multipleString, listString)

    return result
  } 
    catch(err){
      alert(err)
    }

}

//console.log(ex4result('3 5 : 1 2 3 4 5 6 7 8 9'))

//Callback function for onClick function
const ex5Display = () => {
    const a = document.getElementById("strList").value
        const answer = ex5result(a)
        if (answer) alert(`The answer to the sum of multiples is ${answer}`)
}