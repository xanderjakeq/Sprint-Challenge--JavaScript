// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(x, y, cb){
  return cb(x, y)
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

// `return` is the specification but the Tests expects  console.log ??

function add(num1, num2){
  return num1 + num2
}

function multiply(num1, num2){
  return num1 * num2
}

function greeting(firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


console.log(consume(2,2,add));
console.log(consume(10,16,multiply)); 
console.log(consume("Mary","Poppins", greeting));

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/*
  nestedfunction is within another function creating a closure.
  Which allows it to have access to the environment where nestedfunction 
  was defined thus able to use the internal variable
*/


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();