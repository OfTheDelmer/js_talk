// examples/lexical_closure.js

function MakeGreeter(greeting) {
  return function (name) {
      console.log(greeting, name);
  };
}

sayHello = MakeGreeter("Hello, %s.");
welcome = MakeGreeter("Welcome, %s.");

sayHello("John");
welcome("Jane");