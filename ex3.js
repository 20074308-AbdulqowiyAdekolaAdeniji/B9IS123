let listEuler1=(a,b,l)=>0;//obviously wrong - compute the sum of multiples of a or b in list l
let listEuler2=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l
let listEuler3=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l

let eulerListCustom=(a,b,n)=> {

     let sum = 0

    sum = n.filter(x=>x % a === 0 || x % b === 0)
      .reduce((x,y)=>y+x,0)

    return sum;         
}

let eulerList = () => {
    const aValue = document.getElementById("a1").value;
    const a = parseInt(aValue);

    const bValue = document.getElementById("b1").value;
    const b = parseInt(bValue);

    const l = document.getElementById("l").value.split(" ").map(x=>parseInt(x));
    //const l = parseInt(lValue);

    const result = eulerListCustom(a,b,l)

    return result
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