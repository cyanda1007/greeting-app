function Greetings() {
  let greetingCounter = 0;
  function zuluGreeting(name) {
    return "Sawubona " + name;
  }

  function englishGreeting(name) {
    return "Hello " + name;
  }

  function xhosaGreeting(name) {
    return "Molo " + name;
  }

  function counter() {
    greetingCounter = greetingCounter + 1;
    return greetingCounter;
  }

  return {
    zuluGreeting,
    englishGreeting,
    xhosaGreeting,
    counter,
  };
}
