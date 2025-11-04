# React Basics and Lab Exercises

## What is a Hook in React?
A **React Hook** is a special JavaScript function that enables functional components in React to utilize state and other React features that were previously only available in class components.  
They were introduced in **React 16.8** to provide a more functional and concise way to manage component logic.

---

## What is a Component?
A **React component** is a fundamental building block in React applications, representing a self-contained, reusable piece of a user interface (UI).  
It encapsulates both the logic and the appearance of a specific part of the UI.

---

## What is useState Hook?
The **useState** hook in React is a function that allows functional components to manage and update state, providing stateful behavior that was previously only available in class components.

---

## What is useEffect Hook?
The **useEffect** hook in React is a built-in hook that allows you to perform side effects in functional components.  
Side effects are operations that interact with the outside world or have an impact beyond the component's render cycle.

---

## What is Routing?
**Routing** in React is the process of navigating between different components or views in a single-page application (SPA) without a full page reload.  
It uses libraries like **React Router** to map different URLs to specific components, allowing the UI to update dynamically as the user navigates through the app.

---

## 🧪 Lab 1

### Steps:
1. Create a new React application called **"wallmart"** using:
   ```bash
   npx create-react-app wallmart
   ```
2. After creating the project, run:
   ```bash
   cd wallmart
   code .
   ```
   → This will open the project in **VS Code**.

3. Create a folder **`pages`** under `src`.

4. Create **3 components** under `pages`:
   - `Home.js`
   - `About.js`
   - `Contact.js`

5. Start the project with:
   ```bash
   npm start
   ```
   You should get the rotating React logo output.

---

## 🧪 Lab 2

### Steps:
1. Under the `pages` folder, create a component called **CounterApp.js**.

2. Copy and paste the following code:

   ```jsx
   import React, { useState, useEffect } from "react";

   export default function CounterApp() {
     const [count, setCount] = useState(0);

     // useEffect runs every time 'count' changes
     useEffect(() => {
       console.log(`Counter updated: ${count}`);
     }, [count]);

     return (
       <div className="flex flex-col items-center justify-center min-h-screen text-center">
         <h1 className="text-2xl font-bold mb-4">React useEffect Counter</h1>
         <p className="text-lg mb-4">Count: {count}</p>
         <button
           onClick={() => setCount(count + 1)}
           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         >
           Increment
         </button>
       </div>
     );
   }
   ```

3. Import the `CounterApp` component in **index.js**.

4. Run the application.

---

## Notes

- The **useEffect** hook continuously checks for the value of `count`.
- When the button is clicked, if the `count` value changes, **useEffect** executes.
- You can verify this by checking the **console** output using DevTools.
