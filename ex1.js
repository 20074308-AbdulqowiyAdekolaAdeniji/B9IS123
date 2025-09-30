// This script is for the baggage weight exercise
// Function to check baggage weight

//alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed
const check = () => {
    const value = document.getElementById("weight").value; // get input value from user
    const weight = parseInt(value); // convert to integer insantly
    
    if (isNaN(weight)) {
      alert("Please enter a valid number");  // Checks if a valid number has been entered
      return;
    }

    if (weight <= 15) {
      alert(`The baggage weights ${weight}, it is acceptable`);
    } else {
      alert(`The baggage is overweight`);
      document.getElementById('removed').style='display:block;'
      document.getElementById('remB').style='display:block;'
    }
  }

  let remove=()=>alert('Removing weight: '+parseInt(document.getElementById('removed').value))
