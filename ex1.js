//write a function to alert if overweight (15kg) baggage

//call it from the page

            //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed

let currentWeight = 0; // keep track of baggage weight

    // Weight checking function
    const check = () => {
      const value = document.getElementById("weight").value; 
      const weight = parseInt(value); 
      
      //This is to avoid getting an input that's not a number
      if (isNaN(weight)) {
        alert("Please enter a valid number");
        return;
      }

      currentWeight = weight; // save the weight for later use i.e for calculation

      if (currentWeight <= 15) {
        alert(`The baggage weighs ${currentWeight}, it is acceptable`);
      } else {
        alert(`The baggage is overweight`);
        document.getElementById('removed').style='display:block;';
        document.getElementById('remB').style='display:block;';
      }
    }

    // Remove function
    const remove = () => {
      const value = document.getElementById('removed').value;
      const toRemove = parseInt(value);

      if (isNaN(toRemove)) {
        alert("Please enter a valid number to remove");
        return;
      }

      currentWeight -= toRemove; // deduct from current weight

      if (currentWeight <= 15) {
        alert(`Baggage is now acceptable at ${currentWeight}kg 👍`);
        document.getElementById('removed').style='display:none;';
        document.getElementById('remB').style='display:none;';
      } else {
        alert(`Baggage still overweight at ${currentWeight}kg 😢`);
      }
    }