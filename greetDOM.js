//REFERENCE TO DOM ELEMENTS
const nameInput = document.querySelector(".nameInput");
const count = document.querySelector(".count");
const greetBtn = document.querySelector(".greetBtn");
const resetBtn = document.querySelector(".resetBtn");
const greetMessage = document.querySelector(".greetMessage");
const errorDiv = document.querySelector(".errorDiv");
const errorMessage = document.querySelector(".errorMessage");

//Animation Div
const greetDiv = document.querySelector(".greetDiv");
function errorRemove() {
  errorDiv.setAttribute("style", "opacity:0");
}
//Factory function instance
let greetings = greet();
greetBtn.addEventListener("click", function () {
  errorDiv.setAttribute("style", "opacity:1");
  greetings.clearList(greetDiv);
  greetings.changeIsAvailable(false);
  errorDiv.classList.remove("danger");
  errorDiv.classList.remove("sucessful");
  const radioBtn = document.querySelector(".greetLanguage:checked");
  greetings.enterName(nameInput.value);
  if (!radioBtn) {
    errorDiv.classList.add("danger");
    errorMessage.innerHTML = greetings.errorMessage();
  }
  if (radioBtn) {
    greetings.languageVal(radioBtn.value);
    errorDiv.classList.add("danger");
    errorMessage.innerHTML = greetings.errorMessage();
  }
  if (radioBtn && nameInput.value !== "") {
    errorDiv.classList.remove("danger");
    greetings.storeNames();
    greetings.languageVal(radioBtn.value);
    greetings.appendGreeting(greetDiv);
    errorDiv.classList.add("sucessful");
    errorMessage.innerHTML = greetings.errorMessage();
    if (greetings.checkAvailable() === true) {
      errorDiv.classList.add("danger");
      errorMessage.innerHTML = greetings.errorMessage();
    }
  }
  //timeout
  setTimeout(errorRemove, 5000);
  //localstorage
  let namesObject = greetings.theNamesObject();
  let theCount = Object.keys(namesObject).length;
  count.innerHTML = theCount;
  let strObject = JSON.stringify(namesObject);
  localStorage.setItem("names", strObject);
});
if (localStorage["names"]) {
  let theObject = JSON.parse(localStorage.getItem("names"));
  let namesCount = Object.keys(theObject).length;
  count.innerHTML = namesCount;
  greetings.storeLocalStorage(theObject);
}
resetBtn.addEventListener("click", function () {
  errorDiv.setAttribute("style", "opacity:1");
  errorDiv.classList.remove("sucessful");
  errorDiv.classList.remove("danger");
  greetings.clearList(greetDiv);
  errorDiv.classList.add("sucessful");
  errorMessage.innerHTML = "Storage has been cleared";
  if (localStorage["names"]) {
    localStorage.clear();
    let newObject = {};
    count.innerHTML = 0;
    greetings.storeLocalStorage(newObject);
  }

  setTimeout(errorRemove, 5000);
});
