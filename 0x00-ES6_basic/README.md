# 0x00. ES6 Basics
## Concepts
- [Modern JS](https://github.com/mbeaudru/modern-js-cheatshee)
- [JavaScript Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Module patterns](https://darrenderidder.github.io/talks/ModulePatterns/#/)
- [var, let and const](https://www.youtube.com/watch?v=sjyJBL5fkp8)
- [Javascript Tutorial](https://www.youtube.com/watch?v=vZBCTc9zHtI)
- [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Object-oriented JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
- [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [this/self](https://alistapart.com/article/getoutbindingsituations/)
## Resources
- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)
## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- What ES6 s
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops
## ECMAScript 6 - ECMAScript 2015
### New Features in ES6
- The let keyword
- The const keyword
- Arrow Functions
- The {a,b} = Operator
- The [a,b] = Operator
- The ... Operator
- For/of
- Map Objects
- Set Objects
- Classes
- Promises
- Symbol
- Default Parameters
- Function Rest Parameter
- String.includes()
- String.startsWith()
- String.endsWith()
### JavaScript let
- The let keyword allows you to declare a variable with block scope.
- The let keyword was introduced in ES6 (2015)
- Variables declared with let have Block Scope
- Variables declared with let must be Declared before use
- Variables declared with let cannot be Redeclared in the same scope
#### Block Scope
- Before ES6 (2015), JavaScript did not have Block Scope.
- JavaScript had Global Scope and Function Scope.
- ES6 introduced the two new JavaScript keywords: `let` and `const`.
- These two keywords provided Block Scope in JavaScript:
```JS
{
    let x = 2;
}
// x can NOT be used here.
```
- Variables defined with let can not be redeclared.
- You can not accidentally redeclare a variable declared with let.
- With `let` you **can not** do this:
```JS
let x = "John Doe";
let x = 0;
```
```JS
var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10
```
### JavaScript const
- The const keyword allows you to declare a constant (a JavaScript variable with a constant value).
- Constants are similar to let variables, except that the value cannot be changed.
```JS

```
### Arrow function expressions
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
- Arrow functions cannot use yield within their body and cannot be created as generator functions.
```JS
const materials = ['Hydrogen', 'Helum', 'lthum', 'Beryllium'];
console.log(materials.map((material) => material.length));
// Expected output Array [8, 6, 7, 9]
```
## this/self
### Why should we care about binding?
- Almost no major object-oriented programming (OOP) languages force you to consider binding. That is, they don’t require you to explicitly qualify access to the current object’s members (methods and properties) with a reference such as this or self. If you’re calling a method on no particular object, you’re usually calling it on the current object. The same goes when you’re passing a method around for later invocation: it will retain its current object. In short, for most OOP languages, binding is implicit. This is true in Java, C#, Ruby, Delphi, and C++, to name but a few.
- PHP and JavaScript do require you to explicitly state which object you’re accessing, even if it’s the current one.
- JavaScript is very dynamic and relies on “prototypal inheritance,” which is a significantly different paradigm than class-based inheritance. Such distinctions do not immediately relate to binding issues, but demonstrate that traditional object-related syntaxes and behaviors were of little importance to the designers of JavaScript.
- In JavaScript, binding is always explicit, and can easily be lost, so a method using this will not refer to the proper object in all situations, unless you force it to. Overall, binding in JavaScript is not a difficult concept, but it is far too often ignored or glossed over by JavaScripters, which leads to confusion.
### Let’s step in it
- Consider the following, innocuous-looking examples, and how their actual behavior can seem unpredictable.
```JS
var john = {
    name: 'John',
    greet: function(person) {
        alert("Hi " + person + ", my name is " + name);
    }
};
john.greet("Mark");
// => Hi Mark, my name is
```
- Okay, that’s weird. Where did the name go?  Well, we were guilty of a binding assumption here: our method just refers to name, which JavaScript will look for in the several valid levels of variables, ending up with the properties of the window object. Of course our window does have a name property, but it’s empty by default, so no name shows up.
Let’s try it out:
```JS
name = 'Ray'; // Or explictly: window.name = 'Ray';
var john = {
  name: 'John',
  greet: function(person) {
    alert("Hi " + person + ", my name is " + name);
  }
};john.greet("Mark");
// => "Hi Mark, my name is Ray"
```
- Well, that’s just dandy, but useless. What we want is our object’s name property, not the one in window!  Here is where explicit binding is important:
```JS
var john = {
  name: 'John',
  greet: function(person) {
    alert("Hi " + person + ", my name is " + this.name);
  }
};john.greet("Mark");
// => "Hi Mark, my name is John"
```
- Notice how we prefix our reference to name with the keyword this: that’s explicit binding. And indeed it works!  Or does it? 
```JS
var john = {
  name: 'John',
  greet: function(person) {
    alert("Hi " + person + ", my name is " + this.name);
  }
};var fx = john.greet;
fx("Mark");
// => "Hi Mark, my name is " (or "Hi Mark, my name » is Ray" depending on where you're trying it) 
```
- Perhaps you’re not familiar with languages that treat functions as first-order values, in which case the line var fx = john.greet; may seem weird. This does not call the greet method, but creates a reference to it—an alias of sorts, if you will.  Hence, calling fx ends up calling the greet method. However, we’re apparently in some trouble all of a sudden: we’re explicitly using the this keyword, yet it does not use John. What gives?
- This is the single most important issue with JavaScript binding—something I’ll refer to as “binding loss.”  It happens whenever you’re accessing a method through a reference instead of directly through its owner object. The method loses its implicit binding, and this stops referencing its owner object and goes back to its default value, which in this case is window (so if window had a name property by then, it would be used).
