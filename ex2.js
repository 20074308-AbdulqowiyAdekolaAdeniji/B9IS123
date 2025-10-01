//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n

let euler1=()=>{
    let sum = 0
    for (let n = 1; n < 1000; n++) {
        if (n % a === 0 || n % b === 0){
            sum += n;
        }
    }

    alert(`The sum of all the multiples of 3 and 5 below 1000 is ${sum}`)
}

let eulerCustom=()=> {
    const aValue = document.getElementById("a").value;
    const a = parseInt(aValue);

    const bValue = document.getElementById("b").value;
    const b = parseInt(bValue);

    const nValue = document.getElementById("n").value;
    const n = parseInt(nValue);

    let sum = 0
    for (let x = 1; x < 1000; x++) {
        if (x % a === 0 || x % b === 0){
            sum += x;
        }
    }

    alert(`The answer is..... 🥁 🥁 🥁 ...${sum}`)
}