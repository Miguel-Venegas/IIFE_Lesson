// Immediately Invoked Function Expressions (IIFE)

// this is a function statement

function greet(name){
    console.log('Hello ' + name);
}

greet('Miguel');

// using a function expression
// this is a function expression, which is set with a variable equal to it
// in the creation phase, this function is not committed to memory

let greetFunction = function(name){
    console.log('Hello ' + name);
}

greetFunction('Miguel');


// this is an immediately invoked function expression. the difference is that we invoke it as soon as it is created.
// the difference: it holds the result value. The result is a string, i.e., "Hello Miguel"

let greeting = function(name){
    return 'Hello ' + name;
}('Miguel');

console.log(greeting);


// if you want to have a function expression sit in your code but not assigned to a variable, you can wrap it in () like so:

(function(name){
    console.log('Hello' + name)
});

// parenthesis is a grouping operator. You only put expressions in operators, which applies to function expressions as well.

// there are some interesting things you can do with this. For example, 

let NAME = 'Miguel';

(function(name){
    let greeting = 'Inside IIFE: Hello '
    console.log(greeting + name)
}(NAME)); // this outputs : Inside IIFE: Hello Miguel


