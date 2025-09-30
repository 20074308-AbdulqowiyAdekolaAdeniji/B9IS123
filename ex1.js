// This script is for the baggage weight exercise
// Function to check baggage weight
const customerMessage = () => {
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
    }
  }
