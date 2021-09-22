let billAmount = document.querySelector("#bill-amount");

let cashGiven = document.querySelector("#cash-given");

let checkNotes = document.querySelector("#check-notes");

checkNotes.addEventListener("click", clickHandler);

function hascharacter(myString) {
  return /[a-z]/.test(myString);
}

function clickHandler() {
  console.log("in handler");

  console.log(billAmount.value);

  console.log(cashGiven.value);

  if (hascharacter(billAmount.value)) {
    console.log(hascharacter(billAmount.value));
  
    console.log("Invalid entry at billAmount.");
  }else if(hascharacter(cashGiven.value)){
    console.log(hascharacter(cashGiven.value));
  
    console.log("Invalid entry at cashGiven.");

  }else{


// guarunteed its a number now




  }

  //   clickHandler end
}
