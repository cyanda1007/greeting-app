let domFunction = Greetings();
const disLanguage = document.querySelector(".typeOfLanguage");
const greetBtn = document.querySelector(".addLanguage");
const firstName = document.querySelector(".languageEntered");
const radioZulu = document.querySelector(".radioZulu");
const radioEnglish = document.querySelector(".radioEnglish");
const radioXhosa = document.querySelector(".radioXhosa");
const clearBtn = document.querySelector(".remove");
const calculate = document.querySelector(".count");
const errorMessage = document.querySelector(".name-error");
const languageErrorMessage = document.querySelector(".language-error");
calculate.innerHTML =
  localStorage.getItem("list") === null
    ? 0
    : JSON.parse(localStorage.getItem("list")).length;
//get all items in local storage
let listName = [];

// check if buttons clicked
let checked = false;
radioZulu.addEventListener("click", () => {
  checked = true;
});
radioEnglish.addEventListener("click", () => {
  checked = true;
});
radioXhosa.addEventListener("click", () => {
  checked = true;
});

greetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = firstName.value;

  const checkedRadioBtn = document.querySelector(
    "input[name='language']:checked"
  );

  if (name === "" || name === undefined) {
    errorMessage.style.display = "block";
    throw new Error("Please enter a name");
  } else if (/[0-9]/.test(name)) {
    errorMessage.innerHTML = "Please put letters only";
    throw new Error("Please put letters only");
  }

  if (checked === false) {
    languageErrorMessage.style.display = "block";
    throw new Error("please select one language");
  }

  errorMessage.style.display = "none";
  languageErrorMessage.style.display = "none";

  if (checkedRadioBtn.value === "zulu") {
    disLanguage.innerHTML = domFunction.zuluGreeting(name);
  }
  if (checkedRadioBtn.value === "engfa") {
    console.log(domFunction.englishGreeting(name));
    disLanguage.innerHTML = domFunction.englishGreeting(name);
  }
  if (checkedRadioBtn.value === "xhosa") {
    disLanguage.innerHTML = domFunction.xhosaGreeting(name);
  }
  listName.push(name);
  localStorage.setItem("list", JSON.stringify(listName));
  localStorage.getItem("list", JSON.stringify(listName));
  calculate.innerHTML =
    localStorage.getItem("list") === null
      ? 0
      : JSON.parse(localStorage.getItem("list")).length;
});
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear("list", JSON.stringify(listName));
  calculate.innerHTML =
    localStorage.getItem("list") === null
      ? 0
      : JSON.parse(localStorage.getItem("list")).length;
});
