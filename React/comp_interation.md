Perfect 👍 — let’s keep it consistent with your `.js` setup.
Here’s the same working demo (no JSX extension changes, just `.js` files) — you can drop these directly under your `src/pages/` folder in your **Wallmart** React project.

---

### 🧩 `src/pages/TopicSelector.js`

Displays the two topics and notifies the parent when one is selected.

```javascript
import React from "react";

function TopicSelector({ onSelect }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Select a Topic:</h2>
      <button
        onClick={() => onSelect("Music")}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
      >
        Music
      </button>
      <button
        onClick={() => onSelect("Sports")}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Sports
      </button>
    </div>
  );
}

export default TopicSelector;
```

---

### 🧩 `src/pages/TopicDetails.js`

Displays information based on what the user selected.

```javascript
import React from "react";

function TopicDetails({ topic }) {
  if (!topic) {
    return <p className="p-4 text-gray-600">Please select a topic above.</p>;
  }

  return (
    <div className="p-4 border-t mt-4">
      {topic === "Music" && (
        <>
          <h3 className="text-lg font-bold">🎵 Music Bands</h3>
          <p>Popular bands include Coldplay, Imagine Dragons, and The Beatles.</p>
        </>
      )}
      {topic === "Sports" && (
        <>
          <h3 className="text-lg font-bold">🏏 Sports Highlights</h3>
          <p>Sports teach teamwork, strategy, and perseverance. Cricket and Football are top choices!</p>
        </>
      )}
    </div>
  );
}

export default TopicDetails;
```

---

### 🧩 `src/pages/Home.js`

Manages the state and links the two components.

```javascript
import React, { useState } from "react";
import TopicSelector from "./TopicSelector";
import TopicDetails from "./TopicDetails";

function Home() {
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Wallmart Interactive Demo</h1>

      <TopicSelector onSelect={setSelectedTopic} />

      <TopicDetails topic={selectedTopic} />
    </div>
  );
}

export default Home;
```

---

### 🧩 Update `src/App.js`

```javascript
import React from "react";
import Home from "./pages/Home";

function App() {
  return <Home />;
}

export default App;
```

---

### ▶️ To Run

```bash
npm start
```

You’ll see:

* Two buttons: **Music** and **Sports**
* When clicked, the lower component changes its content accordingly.

---

Would you like me to modify this version so the topics are **loaded dynamically from an array** instead of hardcoding the buttons (a better teaching example for “props and dynamic rendering”)?
