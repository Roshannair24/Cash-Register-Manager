let billAmount = document.querySelector("#bill-amount");

let outercashcontainer = document.querySelector(".outer-cash-container");

let cashGiven = document.querySelector("#cash-given");

let checkNotes = document.querySelector("#check-notes");

let smallPara = document.querySelector(".small-para");
let smallParaCash = document.querySelector(".small-para-cash");

function hascharacter(myString) {
  return /[a-z]/.test(myString);
}

billAmount.addEventListener("change", changehandler);

function changehandler() {
  console.log("in handler");

  console.log(billAmount.value);

  if (hascharacter(billAmount.value)) {
    console.log(hascharacter(billAmount.value));

    console.log("Invalid entry at billAmount.");
    smallPara.classList.add("show");
    outercashcontainer.classList.remove("show");
  } else {
    smallPara.classList.remove("show");
    // valid billamount
    // show cash given

    outercashcontainer.classList.add("show");

    console.log(cashGiven.value);
  }
}

cashGiven.addEventListener("change", changehandlercash);

function changehandlercash() {
  console.log("in cash handler");

  console.log(cashGiven.value);

  if (hascharacter(cashGiven.value)) {
    console.log(hascharacter(cashGiven.value));

    console.log("Invalid entry at Cash given.");
    smallParaCash.classList.add("show");
  } else {
    smallParaCash.classList.remove("show");
    // valid cash amount

    console.log(cashGiven.value);
  }
}

checkNotes.addEventListener("click", checknotesclickHandler);

function checknotesclickHandler() {
  if (hascharacter(billAmount.value) || hascharacter(cashGiven.value)) {
    console.log("invalid entry somewhere");
  } else {
    console.log("all valid");
  }
}
