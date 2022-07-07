let domFunction = Greetings();
const disLanguage = document.querySelector(".typeOfLanguage");
const greetBtn = document.querySelector(".addLanguage");
const firstName = document.querySelector(".languageEntered");
const radioBtn = document.querySelector("input[name='language']");
const clearBtn = document.querySelector(".remove");
const calculate = document.querySelector(".count");

//get all items in local storage
function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  return values;
}
// check if buttons clicked
let checked = false;
radioBtn.addEventListener("click", () => {
  checked = true;
});

greetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let name = firstName.value;

  if (name === "" || name === undefined) {
    alert("please enter the name");
  }

  if (checked === false) {
    throw new Error("please select one language");
  }

  calculate.innerHTML = domFunction.counter();

  const checkedRadioBtn = document.querySelector(
    "input[name='language']:checked"
  ).value;
  if (checkedRadioBtn === "zulu") {
    disLanguage.innerHTML = domFunction.zuluGreeting(name);
  }
  if (checkedRadioBtn === "engfa") {
    disLanguage.innerHTML = domFunction.englishGreeting(name);
  }

  if (checkedRadioBtn === "xhosa") {
    disLanguage.innerHTML = domFunction.xhosaGreeting(name);
  }

  localStorage.setItem(JSON.stringify(name), JSON.stringify(name));
  console.log(allStorage());
});
clearBtn.addEventListener("click", (e) => {
  localStorage.clear(JSON.stringify(name), JSON.stringify(name));
});
