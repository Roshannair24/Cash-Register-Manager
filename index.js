let billAmount = document.querySelector("#bill-amount");

let outercashcontainer = document.querySelector(".outer-cash-container");

let cashGiven = document.querySelector("#cash-given");

let checkNotes = document.querySelector("#check-notes");

let tableHolder = document.querySelector(".table-holder");

let smallPara = document.querySelector(".small-para");
let smallParaCash = document.querySelector(".small-para-cash");
let smallParaButton = document.querySelector(".small-para-button ");

let changereturnPara = document.querySelector(".change-to-return");

let notesRowEntire = document.querySelectorAll(".no-of-notes-row");

let notesRow = document.querySelectorAll(".no-of-notes");

let validnumeral = null;

let changeToBeReturned = null;
let arrofDenominations = [2000, 500, 100, 50, 20, 10, 5, 2, 1];

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
    validnumeral = false;
  } else if (billAmount.value <= 0) {
    console.log("Invalid entry at billAmount.");
    smallPara.classList.add("show");
    outercashcontainer.classList.remove("show");
    validnumeral = false;
  } else {
    smallPara.classList.remove("show");
    // valid billamount
    // show cash given

    outercashcontainer.classList.add("show");

    console.log(cashGiven.value);
    validnumeral = true;
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
    validnumeral = false;
  } else if (cashGiven.value <= 0) {
    console.log("Invalid entry at Cash given.");
    smallParaCash.classList.add("show");
    validnumeral = false;
  } else {
    smallParaCash.classList.remove("show");
    // valid cash amount

    console.log(cashGiven.value);
    validnumeral = true;
  }
}

checkNotes.addEventListener("click", checknotesclickHandler);

function checknotesclickHandler() {
  if (validnumeral === false) {
    console.log("invalid entry somewhere");
  } else {
    console.log("all valid numerals");

    let numbcashGiven = Number(cashGiven.value);
    let numbbillAmount = Number(billAmount.value);

    //process the values

    if (numbcashGiven < numbbillAmount) {
      console.log("bill:" + numbbillAmount);
      console.log("cash:" + numbcashGiven);
      console.log("There isnt enough cash");

      smallParaButton.classList.add("show");
    } else {
      smallParaButton.classList.remove("show");
      console.log("there is enough cash");

      tableHolder.classList.add("show");

      changeToBeReturned = numbcashGiven - numbbillAmount;

      console.log("changeToBeReturned:" + changeToBeReturned);

      changereturnPara.innerHTML = changeToBeReturned;

      returnChangeInMinNotes(changeToBeReturned);
    }
  }
}

function returnChangeInMinNotes(change) {
  let tempchange = change;

  let Noofnotes = null;
  console.log("in return change func");

  for (var i = 0; i < arrofDenominations.length; i++) {
    Noofnotes = Math.trunc(tempchange / arrofDenominations[i]);

    console.log("Denomination: " + arrofDenominations[i]);
    console.log("No. of notes: " + Noofnotes);




    notesRow[i].innerText = Noofnotes;

if(Noofnotes!==0){

  notesRowEntire[i].classList.add("show");


}






    tempchange = tempchange % arrofDenominations[i];

    console.log("tempchange: " + tempchange);
  }
}
