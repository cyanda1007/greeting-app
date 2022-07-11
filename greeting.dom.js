let domFunction = Greetings();
const disLanguage = document.querySelector(".typeOfLanguage");
const greetBtn = document.querySelector(".addLanguage");
const firstName = document.querySelector(".languageEntered");
const radioBtn = document.querySelector("input[name='language']");
const clearBtn = document.querySelector(".remove");
const calculate = document.querySelector(".count");
const errorMessage = document.querySelector(".name-error");
const languageErrorMessage = document.querySelector(".language-error");

//get all items in local storage
let listName = [];
// check if buttons clicked
let checked = false;
radioBtn.addEventListener("click", () => {
  checked = true;
});

greetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let name = firstName.value;

  const checkedRadioBtn = document.querySelector(
    "input[name='language']:checked"
  );

  if (name === "" || name === undefined) {
    errorMessage.innerHTML = "Please enter a name";
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
  calculate.innerHTML = domFunction.counter();

  localStorage.setItem("number", JSON.stringify(count));

  if (checkedRadioBtn.value === "zulu") {
    disLanguage.innerHTML = domFunction.zuluGreeting(name);
  } else if (checkedRadioBtn.value === "engfa") {
    disLanguage.innerHTML = domFunction.englishGreeting(name);
  } else if (checkedRadioBtn.value === "xhosa") {
    disLanguage.innerHTML = domFunction.xhosaGreeting(name);
  }
  listName.push(name);
  localStorage.setItem("list", JSON.stringify(listName));
  console.log(listName);
});
// clearBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   localStorage.clear(JSON.stringify(name), JSON.stringify(name));
// });
