// Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".

function newFunction() {
    function printHello() {
        return console.log('hello');
    }

    return printHello;
}

var myPrintHelloFunction = newFunction();
myPrintHelloFunction();

// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

function createFunctionPrinter(input) {
    function printer() {
        return console.log(input);
    }
    return printer;
}

var print = createFunctionPrinter();
print('lol!');

// Challenge 4
// Now we are going to create a function addByX that returns a function that will add an input by x.

function addByX(x) {
	function add(number) {
    x += number;
    return console.log('result ', x)
  }
  return add;
}

var addByTwo = addByX(2);

addByTwo(1);
addByTwo(1);
addByTwo(1);
addByTwo(2);

// Extension: Challenge 5
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

function once(func) {
    var value = 0;
      function myFunc(number) {
      if (!value) {
        value = func(number);
      }
      return value;
    }
    return myFunc;
  }
  var onceFunc = once(addByTwo);
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  console.log(onceFunc(4));  //should log 6
  console.log(onceFunc(10));  //should log 6
  console.log(onceFunc(9001));  //should log 6

// Extension: Challenge 6
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

function after(count, func) {
	var callCounter = 0;
  function printWithDelay() {
    callCounter++;
    return (callCounter >= count) ? func() : undefined;
  }
  return printWithDelay;
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


// Extension: Challenge 7
// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

function delay(func, wait) {
	function exec(params) {
    return setTimeout(function() {
      func.apply(undefined, params);
    }, wait);
  }
  return exec;
}

function printFullName(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}

var func = delay(printFullName, 2000);
func(['Ana', 'Campesan']);