# JavaScript Core Fundamentals & Standards 📜

A structured guide to JavaScript (ES6+) concepts, syntax, and best practices.

## 1. Basics & Variables
JavaScript is an object-oriented, single-threaded programming language with dynamic typing. It is primarily used to create interactivity in web environments.

* **`const`**: Declares a read-only variable that cannot be reassigned after initialization.
* **`let`**: Declares a block-scoped variable that can be reassigned.
* **Scope**: The context in which variables are accessible. Variables declared inside a function are not accessible from the outside.
* **Semicolon (;)**: Used to separate instructions. Mandatory in `for` loops between initialization, condition, and increment.
* **Template Literals**: Strings wrapped in backticks (`) that allow multi-line text and expression embedding via `${}`.

## 2. Logic & Control Flow
* **`if...else`**: A control structure that executes a block of code if a condition is true, or an alternative block if it is false.

### Logical Operators:
* **Strict Equality (`===`)**: Returns `true` only if both value and data type are identical.
* **Logical OR (`||`)**: Returns `true` if at least one condition is true.
* **Logical AND (`&&`)**: Returns `true` only if both conditions are true.
* **Logical NOT (`!`)**: Inverts the boolean value (Logical flip).

## 3. Loops & Iteration
**Iteration** refers to one single execution of the code block inside the loop's curly braces `{}`.

* **`for` Loop**: Executes a block of code a specific number of times as long as the condition remains true.
* **`for...of` Loop**: A modern way to iterate over arrays, providing direct access to each element's value.
* **Increment (`++`)**: Increases a value by one.
* **Decrement (`--`)**: Decreases a value by one.

## 4. Data Structures (Objects & Arrays)
* **Destructuring**: A syntax that allows "unpacking" values from arrays or properties from objects into distinct variables.
* **Rest Operator (`...`)**: Collects all remaining elements or properties into a single variable. In destructuring, it must always be the last element.

### Objects
A collection of properties (key-value pairs).
* **Dot Notation**: The primary syntax for accessing object properties (e.g., `user.name`).
* **Object Mutation**: Even if an object is declared with `const`, its internal properties can be modified, added, or deleted.

### Arrays
An ordered list of values with numeric indices (starting from 0).
* **`.reduce()`**: Iteratively processes each element to reduce the array to a single value (number, string, or object).
* **`.map()`**: Creates a new array by applying a function to every element of the original array.
* **`.includes()`**: Checks if an array contains a specific value.

## 5. Functions
A reusable block of code designed to perform a specific task.
* **Parameters**: Variables listed in the function definition that act as placeholders for values.
* **Arrow Function (`=>`)**: A concise syntax that provides a shorter way to write functions.
* **`return`**: A command that stops the function execution and sends a value back to where it was called.

## 6. Productivity Snippets
* `clg` → `console.log()`
* `nfn` → `const name = (params) => {}`
