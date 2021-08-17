const card = document.querySelector(".card__inner");

const checkBtn = document.querySelector("#check");
const resetBtn = document.querySelector("#reset");

const luckyContainer = document.querySelector("#lucky-container");
const unluckyContainer = document.querySelector("#unlucky-container");

const date = document.querySelector("#date");
const luckyNum = document.querySelector("#luckyNum");

const errMsg = document.querySelector("#errorMsg");
const privacy = document.querySelector("#notice");

checkBtn.addEventListener("click", checkResult);
resetBtn.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
  clearCache();
});

// alert("Privacy notice : Your data is not being stored.");

errorMessage("Privacy notice : Your data is not being stored.");

// Function:checkResult
function checkResult() {
  var dateInput = date.value;
  var numInput = Number(luckyNum.value);
  var sum = 0;
  const dateArr = dateInput.split("-");
  dateArr.map((val) => {
    for (var i = 0; i < val.length; i++) {
      sum = sum + Number(val[i]);
    }
  });
  if (date.value == "" || luckyNum.value == "") {
    errorMessage("Please fill in all the details to continue");
  } else if (luckyNum.value <= 0) {
    errorMessage("Number should be greater than 0");
  } else {
    if (sum % numInput == 0) lucky();
    else unlucky();
    errorMessage("");
  }
}

function lucky() {
  luckyContainer.style.display = "block";
  unluckyContainer.style.display = "none";
  card.classList.toggle("is-flipped");
}

function unlucky() {
  unluckyContainer.style.display = "block";
  luckyContainer.style.display = "none";
  card.classList.toggle("is-flipped");
}

//clear cache
function clearCache() {
  date.value = "";
  luckyNum.value = "";
}

//Show Error
function errorMessage(msg) {
  errMsg.style.color = "black";
  errMsg.textContent = msg;
}

//privacy note
// function privacyMsg() {
//   privacy.style.color = "red";
// }
