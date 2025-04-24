 **Introduction to JavaScript**—one of the most essential languages in web development.

Whether you're just getting started with coding, or you've played around with HTML and CSS, JavaScript is what brings your web pages to life. It's what makes a website interactive—think sliders, forms that react, or even games and animations. Yep, that’s all JavaScript!

Now, a quick bit of history—JavaScript was created in just 10 days back in 1995, and it's grown into one of the most widely-used languages in the world. It runs directly in your browser, which means there's no need for any extra software to start learning and experimenting.

In this session, we’ll cover the basics:  
- What JavaScript is  
- How to write your first script  
- Variables, data types, and functions  
- And how JavaScript fits into the bigger picture of web development  

By the end, you'll have a solid foundation to start building interactive web pages on your own.

So, grab your code editor, open up your browser, and let’s get started with JavaScript!

---

Let me know if you’d like to tailor it for a younger audience, a more advanced group, or include your brand (like Crux Training Solutions).

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

