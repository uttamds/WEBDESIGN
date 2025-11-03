Let’s go over the **basics of routing in React** 👇

---

### 🧭 What is Routing in React?

**Routing** in React means navigating between different components or “pages” without reloading the browser.
React Router (specifically **react-router-dom**) is the library most commonly used for this.

---

### ⚙️ Step 1: Install React Router

In your React project directory, run:

```bash
npm install react-router-dom
```

---

### 🧩 Step 2: Basic Folder Setup

Example project structure:

```
src/
 ├── App.js
 ├── index.js
 ├── pages/
 │     ├── Home.js
 │     ├── About.js
 │     └── Contact.js
```

---

### 🪄 Step 3: Create Components (Pages)

**Home.js**

```jsx
export default function Home() {
  return <h2>Welcome to the Home Page</h2>;
}
```

**About.js**

```jsx
export default function About() {
  return <h2>About Us Page</h2>;
}
```

**Contact.js**

```jsx
export default function Contact() {
  return <h2>Contact Page</h2>;
}
```

---

### 🛣️ Step 4: Define Routes in `App.js`

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
```

---

### 🧭 Step 5: What’s Happening Here

* **`BrowserRouter` (as Router)** — Wraps the whole app and enables routing.
* **`Routes`** — Container for all route definitions.
* **`Route`** — Maps a URL path to a component.
* **`Link`** — Used for navigation **without page reload**.

---

### 🌐 Example Navigation

| URL Path   | Component Shown |
| ---------- | --------------- |
| `/`        | Home            |
| `/about`   | About           |
| `/contact` | Contact         |

---

### ⚡ Bonus: Default or 404 Route

You can add a catch-all route for unknown URLs:

```jsx
<Route path="*" element={<h2>Page Not Found</h2>} />
```

---

Would you like me to show a **small interactive example using useState with routing** (e.g., a Product List + Product Details navigation)?
