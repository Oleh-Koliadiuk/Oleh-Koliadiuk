# Python Core Fundamentals & Standards 🐍

A structured guide to Python 3 concepts, syntax, and best practices for clean and efficient code.

## 1. Basics & Variables
Python is a high-level, interpreted programming language known for its readability and "zen" philosophy. It uses **indentation** instead of curly braces `{}` to define code blocks.

* **Dynamic Typing**: Variables do not require an explicit type declaration; the type is determined at runtime.
* **Naming Convention**: Uses `snake_case` for variables and functions (e.g., `user_score`, `calculate_total`).
* **Indentation**: Mandatory 4 spaces. A single misplaced space will result in an `IndentationError`.
* **f-Strings**: Modern string interpolation using `f"Text {expression}"` for embedding variables directly into strings.
* **Comments**: Prefixed with `#` for single-line notes.

## 2. Logic & Control Flow
Python prioritizes readability by using English keywords (`and`, `or`, `not`) instead of symbols.

* **`if...elif...else`**: The primary structure for conditional execution.
* **Truthiness**: Objects like `0`, `None`, `[]`, `{}`, and `""` are evaluated as `False` in boolean contexts.

### Logical Operators:
* **Equality (`==`)**: Checks if values are identical.
* **Identity (`is`)**: Checks if two variables point to the exact same object in memory.
* **Logical AND (`and`)**: Returns `True` only if both conditions are met.
* **Logical OR (`or`)**: Returns `True` if at least one condition is met.
* **Logical NOT (`not`)**: Inverts the boolean state.

## 3. Loops & Iteration
Iteration in Python is designed to be "Pythonic"—focusing on the elements rather than the indices.

* **`for...in` Loop**: Iterates directly over items in a sequence (list, string, or range).
* **`range()`**: Generates a sequence of numbers (e.g., `range(5)` produces 0 to 4).
* **`while` Loop**: Repeats a block of code as long as a condition remains `True`.
* **`break` / `continue`**: Keywords to exit the loop prematurely or skip the current iteration.

## 4. Data Structures (Lists, Dicts, Tuples)
Python features powerful built-in collections that are highly flexible.

### Lists (Arrays)
An ordered, mutable collection of elements.
* **Slicing**: Access subsets using `list[start:stop:step]` (e.g., `my_list[::-1]` reverses the list).
* **`.append()`**: Adds an element to the end of the list.

### Dictionaries (Objects)
A collection of key-value pairs where keys must be unique.
* **`dict["key"]`**: Standard access (throws error if key is missing).
* **`.get()`**: Safe access that returns `None` instead of crashing if the key is missing.

### Tuples
Ordered, **immutable** sequences. Once created, their elements cannot be changed. Defined with parentheses `(1, 2, 3)`.

## 5. Functions
Reusable blocks of code defined with the `def` keyword.

* **Parameters**: Placeholders for data passed into the function. Supports **Default Arguments** (e.g., `def greet(name="Guest"):`).
* **`return`**: Terminates the function and sends a value back. If omitted, the function returns `None`.
* **Lambda Functions**: Anonymous, one-line functions used for short tasks: `lambda x: x * 2`.

## 6. Productivity & Pythonic Tips
* **List Comprehension**: Concise syntax for creating lists: `[x for x in range(10) if x % 2 == 0]`.
* **`pip`**: The package installer for Python (used for `aiogram`, `requests`, etc.).
* **`.env` Files**: Used to store sensitive data like **API Tokens**, which should always be ignored by Git.