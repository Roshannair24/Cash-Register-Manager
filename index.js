let billAmount = document.querySelector("#bill-amount");

let cashGiven = document.querySelector("#cash-given");

let checkNotes = document.querySelector("#check-notes");

checkNotes.addEventListener("click", clickHandler);

function clickHandler() {
  console.log("in handler");

  console.log(billAmount);
  console.log(billAmount.value);

  console.log(cashGiven);
  console.log(cashGiven.value);






}
