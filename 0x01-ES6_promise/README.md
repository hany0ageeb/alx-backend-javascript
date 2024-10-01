# 0x01. ES6 Promises
## Resources
### Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
## Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
## Description
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

![Promise states](/img/promises.png)

## await

The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.

```JS
await expression
```
`expression`

    A Promise, a thenable object, or any value to wait for.

## Description
await is usually used to unwrap promises by passing a Promise as the expression. Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.

If the promise is rejected, the await expression throws the rejected value. The function containing the await expression will appear in the stack trace of the error. Otherwise, if the rejected promise is not awaited or is immediately returned, the caller function will not appear in the stack trace.

## async function
The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

## Syntax

```JS
async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```
## Description
An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

## throw
The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.

```JS
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error('Parameter is not a number!');
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}
```
### Description
The throw statement is valid in all contexts where statements can be used. Its execution generates an exception that penetrates through the call stack.

The throw keyword can be followed by any kind of expression, for example:
```JS
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```
In practice, the exception you throw should always be an Error object or an instance of an Error subclass, such as RangeError. This is because code that catches the error may expect certain properties, such as message, to be present on the caught value. For example, web APIs typically throw DOMException instances, which inherit from Error.prototype.

## Understanding JavaScript Promises In-Depth
### Introduction
Handling asynchronous operations in Javascript is a fundamental part of creating responsive and interactive web applications. Asynchronous programming allows tasks like API calls, file reading, or timers to run in the background, ensuring the application remains responsive. Enter JavaScript Promises, a powerful abstraction for managing these asynchronous operations.
### The Basics of Promises
A **Promise** in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states:
- **Pending**: The initial state, where the operation has not completed yet.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

### Structure of a Promise
```JS
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  if (/* operation successful */) {
    resolve('Success');
  } else {
    reject('Error');
  }
});
```
### Using Promises
Once a promise is created, it can be used with .then(), .catch(), and .finally() methods to handle the fulfilled or rejected state.
```JS
myPromise
  .then((value) => {
    // Handle success
    console.log(value);
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  })
  .finally(() => {
    // Execute cleanup or final operations
    console.log('Completed');
  });
```
#### Using .catch()
The .catch() method is used to handle any errors that occur in the promise chain.
```JS
fetch('https://api.example.com/data')
  .then(response => response.json())
  .catch(error => console.error('Failed to fetch data:', error));
```
### Promise.all()
When you need to run multiple promises in parallel and wait for all of them to complete, Promise.all() is incredibly useful.
```JS
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // results is an array of each promise's result
    console.log(results);
  })
  .catch((error) => {
    // If any promise is rejected, catch the error
    console.error("A promise failed to resolve", error);
  });
```
### Promise.race()
Promise.race() is similar to Promise.all(), but it resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
```JS
Promise.race([promise1, promise2, promise3])
  .then((value) => {
    // Value of the first resolved promise
    console.log(value);
  })
  .catch((error) => {
    // Error of the first rejected promise
    console.error(error);
  });
```