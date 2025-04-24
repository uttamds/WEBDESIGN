

### 📘 **1. What is JavaScript?**

- JavaScript (JS) is a language used in websites.  
- It helps make websites **interactive** (like buttons, pop-ups, etc.).  
- It runs **inside the browser**.

---

### 📗 **2. What is a Variable?**

- A variable **stores a value** (like a number or word).  
- Example:

```javascript
let name = "John";
let age = 20;
```

- `let` is used to **create a variable**.

---

### 📙 **3. What is a Function?**

- A function is a **set of steps**.  
- We write it once, then use it many times.

```javascript
function sayHello() {
    alert("Hello!");
}
```

- To run the function, write:

```javascript
sayHello();
```

---

### 📕 **4. What is the DOM?**

- DOM means **Document Object Model**.  
- It is how JavaScript sees your web page.  
- JS can **change** things on the page using the DOM.

---

### 📒 **5. How to Use DOM in JavaScript**

- Example: Change text inside a paragraph

```html
<p id="greet">Hello!</p>
```

```javascript
document.getElementById("greet").innerText = "Hi!";
```

---

### 📓 **6. Simple Code to Add Two Numbers**

**HTML:**

```html
<input id="num1">
<input id="num2">
<button onclick="add()">Add</button>
<p id="output">Result:</p>
```

**JavaScript:**

```javascript
function add() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let sum = a + b;
    document.getElementById("output").innerText = "Result: " + sum;
}
```

---

**📝 What this does:**

1. Takes values from two boxes  
2. Turns them into numbers  
3. Adds them  
4. Shows the result on the page

---

