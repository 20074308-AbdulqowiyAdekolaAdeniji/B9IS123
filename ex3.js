let listEuler1=(a,b,l)=>0;//obviously wrong - compute the sum of multiples of a or b in list l
let listEuler2=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l
let listEuler3=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l

let eulerListCustom=(a,b,n)=> {

     let sum = 0

    sum = n.filter(x=>x % a === 0 || x % b === 0)
      .reduce((x,y)=>y+x,0)

    return sum;         
}

// let arr = [3,5]
// let list = [1,2,3,4,5,6,7,8,9]

let eulerArrayCustom = (arr, list) => {

    let sum = list
    .filter(n => arr.some(m => n % m === 0))
    .reduce((a, b) => a + b, 0);

    return sum
}

//////////////////////////////////////////////////////////////////////////////////

let eulerList = () => {
    const a = parseInt(document.getElementById("a1").value);

    const b = parseInt(document.getElementById("b1").value);

    const l = document.getElementById("l").value.split(" ").map(x=>parseInt(x));

    const result = eulerListCustom(a,b,l)

    alert(result)
}

let eulerArray = () => {
    const a = document.getElementById("aList").value.split(" ").map(x=>parseInt(x));
    const m = document.getElementById("mList").value.split(" ").map(x=>parseInt(x));

    const result = eulerArrayCustom(a,m)

    alert(result)
}


//////////////////////////////////////////////////////////////////////////////////

let euler1list=()=>
{
    a=2//can un-hardcode
    b=3
    l=[1,2,3,4,5,6,7,9,10,10,10]  //document.getElementById('l').value.split(" ").map((x=>parseInt(x)); // if l is space separated numbers
    //call listEuler1 and alert. - compute the sum of multiples of a or b in list l
}
let euler2Lists=()=>
{
    a=[2,3]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler2 and alert.
}

let euler2Lists1=()=>
{
    a=[2,3,5]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler3 and alert.
}