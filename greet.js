function greet() {
  let namesGreeted = {};
  let nameString = "";
  let langVal = "";
  let isUndefined = false;

  let isAvailable = false;
  //Function to get the name
  function enterName(val) {
    isUndefined = false;
    if (val == Number(val)) {
      nameString = "";
    } else if (val !== "" && val !== undefined) {
      nameString = val.toLowerCase();
    } else if (val === undefined) {
      isUndefined = true;
      nameString = "";
    } else {
      nameString = "";
    }
  }
  //Check whether the name input is undefined
  function definedState() {
    return isUndefined;
  }
  //Function to return the name
  function getName() {
    return nameString;
  }
  function checkAvailable() {
    return isAvailable;
  }
  //store names in an object
  function storeNames() {
    if (getName()) {
      if (namesGreeted[getName()] === undefined) {
        namesGreeted[getName()] = 1;
      } else if (namesGreeted[getName()] !== undefined) {
        isAvailable = true;
      }
    }
    return namesGreeted;
  }

  ////greeting Functions
  function storeLocalStorage(obj) {
    namesGreeted = obj;
  }
  //greet in english
  function greetEnglish() {
    if (getName()) {
      return `Hello, ${getName()}!`;
    }
  }
  //greet in Afrikaans
  function greetAfrikaans() {
    if (getName()) {
      return `Goeie dag, ${getName()}!`;
    }
  }
  //Greet in xhosa
  function greetXhosa() {
    if (getName()) {
      return `Molo, ${getName()}!`;
    }
  }
  //Language selection function
  function languageVal(val) {
    if (val === "english") {
      langVal = val;
      return greetEnglish();
    } else if (val === "afrikaans") {
      langVal = val;
      return greetAfrikaans();
    } else if (val === "xhosa") {
      langVal = val;
      return greetXhosa();
    }
  }
  //Error messages
  function errorMessage() {
    if (getName() && langVal === "") {
      return "Select a language";
    } else if (getName() === "" && langVal !== "") {
      return "Enter a name";
    } else if (!getName() && !langVal) {
      return "Enter name and select a language";
    } else if (isAvailable === true) {
      return `${getName()} has been greeted already`;
    } else {
      return `sucessfully greeted ${getName()}`;
    }
  }
  //APPEND LOGIC
  function appendGreeting(parent) {
    let parentElement = parent;
    if (nameString != Number(nameString)) {
      if (!isAvailable) {
        let greetNode = document.createElement("div");
        greetNode.setAttribute("class", "greetings");
        greetNode.classList.add("greetAnimation");
        let messageChild = document.createElement("p");
        messageChild.setAttribute("class", "greetMessage");

        messageChild.innerHTML = languageVal(langVal);

        let decoSibling = document.createElement("div");
        decoSibling.setAttribute("class", "dec1");
        decoSibling.classList.add("class", "deco");

        let decoSibling2 = document.createElement("div");
        decoSibling2.setAttribute("class", "dec2");
        decoSibling2.classList.add("class", "deco");

        greetNode.append(messageChild, decoSibling, decoSibling2);

        parentElement.appendChild(greetNode);
      }
    }
  }
  function clearList(parentNode) {
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
  }
  function changeIsAvailable(val) {
    isAvailable = val;
  }
  function theNamesObject() {
    return namesGreeted;
  }
  //return object
  return {
    enterName,
    getName,
    definedState,
    storeNames,
    languageVal,
    errorMessage,
    appendGreeting,
    clearList,
    checkAvailable,
    changeIsAvailable,
    storeLocalStorage,
    theNamesObject,
  };
}
