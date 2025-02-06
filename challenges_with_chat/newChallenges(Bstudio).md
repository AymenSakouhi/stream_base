# AsyncStack's Coding Challenges (Bstudio)

Welcome to **AsyncStack's Coding Challenges** – a collection of fun and thought-provoking JavaScript problems designed to level up your coding skills.
From building a sassy calculator to analyzing chat logs in real time, these challenges blend practical coding scenarios with a dash of humor.
Whether you're a fan of quick puzzles or deep-dive algorithms, there's something here to spark your creativity.

---

## 📜 Table of Contents

- [Medium Difficulty Challenges](#medium-difficulty-challenges)
  - [1. Sassy Calculator](#1-sassy-calculator)
  - [2. Memeify Me!](#2-memeify-me)
- [Hard Difficulty Challenges](#hard-difficulty-challenges)
  - [1. Parenthesis Pandemonium](#1-parenthesis-pandemonium)
  - [2. Real-Time Chat Log Analyzer](#2-real-time-chat-log-analyzer)
- [Getting Started](#getting-started)
- [License](#license)

---

## 🟠 Medium Difficulty Challenges

### 1️⃣ Sassy Calculator

**The Challenge:**  
Write a function `calculate(expression)` that takes a string representing a simple arithmetic
expression and returns its calculated result.
The expression will include non-negative integers and the four basic
operators: `+`, `-`, `*`, and `/` (division). **No parentheses will be present.**

**🔑 Key Requirements:**

- **Operator Precedence:** Respect the correct order of operations
  (multiplication and division before addition and subtraction).
- **Division by Zero:** If the expression involves a division by zero, return the string:  
  `"Nice try, Einstein! You can't divide by zero."`
- **No `eval()`:** Do **not** use JavaScript’s built-in `eval()` function.

**📌 Example Inputs/Outputs:**

```js
calculate("2+3*4-6/2")
// Explanation: 2 + (3×4) - (6÷2) = 2 + 12 - 3 = 11
// Output: 11

calculate("10/0+5")
// Output: "Nice try, Einstein! You can't divide by zero."
```

---

### 2️⃣ Memeify Me!

**The Challenge:**  
Create a function `memeify(text)` that transforms a given string into a “memeified” version
with humorous modifications.

**✨ Transformation Rules:**

- **Uppercase Transformation:** Every word with 4 or more letters should be converted to uppercase.
- **Random Meme Insertions:** After each word, there’s a 25% chance to insert a random meme
  expression from: `["LOL", "ROFL", "LMAO", "OMG"]`
- **Exclamation Enhancement:** If the input text ends with an exclamation mark (`!`),
  replace it with three exclamation marks (`!!!`).

**📌 Example:**

```js
memeify("Coding is fun!")
// Possible Output: "CODING LOL is FUN!!!"
```

---

## 🔴 Hard Difficulty Challenges

### 1️⃣ Parenthesis Pandemonium: The Great Code Cleanup!

**The Backstory:**  
After a long night of coding with endless asynchronous callbacks, AsyncStack’s keyboard got a bit too excited—and the result is a string of code
with parentheses scattered like confetti at a party. Determined to restore balance (and avoid runtime errors), AsyncStack
embarks on a quest to remove the minimum number of invalid parentheses so that the code is **perfectly balanced**.
With his signature dry wit, he declares: “No more unbalanced callbacks on my watch!”

**🛠 The Challenge:**

Write a function `removeInvalidParentheses(s)` where:

- Input: `s`, a string containing lowercase letters and the characters `(` and `)`.
- Output: An array of all possible **valid** strings (i.e., balanced parentheses) after removing the
  fewest number of invalid parentheses.

**📌 Examples:**

```js
console.log(removeInvalidParentheses("()())()"))
// Expected output: ["()()()", "(())()"]

console.log(removeInvalidParentheses("(a)())()"))
// Expected output: ["(a)()()", "(a())()"]
```

🔎 **What You’ll Learn:** Algorithmic thinking with **Breadth-First Search (BFS)** or
**Depth-First Search (DFS)**, handling state, and parsing nested structures.

---

### 2️⃣ Real-Time Chat Log Analyzer

**The Backstory:**  
AsyncStack’s chat server is buzzing 24/7. But with great popularity comes a flood of log entries.
Now our hero needs to extract useful insights from these logs to figure out who’s chatting the most—and
who keeps spamming the infamous catchphrase **“AsyncStack!”** Since log entries arrive at unpredictable times,
you must simulate asynchronous log processing.

**🛠 The Challenge:**  
Write an async function `analyzeChatLogs(logs)` that processes an array of log entries and returns a summary object with:

- **`totalMessages`**: Total number of log entries.
- **`messagesPerUser`**: A mapping of usernames to their message counts.
- **`topWords`**: The 3 most frequent words used (excluding common stop words like "the", "and", "is", etc.).
- **`asyncStackMentions`**: Count of times "AsyncStack" appears in the logs.

**📝 Log Format:**

```plaintext
[2025-02-06T12:00:00Z] username: message
```

**📌 Example Usage:**

```js
const logs = [
  "[2025-02-06T12:00:00Z] AsyncStack: I love async programming!",
  "[2025-02-06T12:00:05Z] coder123: JavaScript is awesome!",
  "[2025-02-06T12:00:10Z] AsyncStack: Debugging is like solving a mystery.",
  "[2025-02-06T12:00:15Z] newbie: I’m still learning the ropes.",
]

analyzeChatLogs(logs).then((summary) => console.log(summary))
```

🔎 **What You’ll Learn:** String parsing, **regex**, async handling with `Promises` and
`async/await`, and **log data aggregation**.

---

## 🚀 Getting Started

### Clone this Repository:

```bash
git clone https://github.com/your-username/asyncstack-challenges.git
cd asyncstack-challenges
```

### Choose a Challenge:

Navigate to the file or folder for the challenge you want to tackle.

### Implement Your Solution:

Write your solution in JavaScript, following the provided guidelines.

### Test Your Code:

Run your solutions using **Node.js** or your preferred environment.

### Contribute:

Found an improvement? Open an issue or submit a pull request! 🚀

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use, modify, and
share it as you like! 😃

---

Happy Coding! 🚀✨ (Bstudio)
