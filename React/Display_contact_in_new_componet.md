Perfect question 👍 — yes, you can easily replace the intrusive `alert()` with a **custom message component** that shows a thank-you message within the same page.

Let’s do it step-by-step 👇

---

### ✅ Step 1: Create a separate component

Let’s create a small component called `MessageBox.js` — it will display the confirmation message nicely.

```jsx
// MessageBox.js
import React from "react";

export default function MessageBox({ message, onClose }) {
  if (!message) return null;

  return (
    <div
      style={{
        backgroundColor: "#e0f7fa",
        color: "#006064",
        padding: "15px",
        borderRadius: "8px",
        marginTop: "20px",
        position: "relative",
      }}
    >
      <p>{message}</p>
      <button
        onClick={onClose}
        style={{
          backgroundColor: "#006064",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer",
          position: "absolute",
          top: "5px",
          right: "10px",
        }}
      >
        ✖
      </button>
    </div>
  );
}
```

---

### ✅ Step 2: Update your `Contact` component

Now import and use `MessageBox` instead of using `alert()`.

```jsx
import React, { useState } from "react";
import MessageBox from "./MessageBox";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [confirmation, setConfirmation] = useState(""); // new state for message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#0066cc" }}>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: "#0066cc",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Send Message
        </button>
      </form>

      {/* Show confirmation below the form */}
      <MessageBox
        message={confirmation}
        onClose={() => setConfirmation("")}
      />
    </div>
  );
}
```

---

### 🎯 Result

* When the user submits the form, instead of a browser `alert()`,
  they’ll see a **custom message box** appear below the form.
* They can dismiss it using the ❌ button.
* It’s cleaner, user-friendly, and reusable!

---

Would you like me to make it **fade in / fade out** using a small animation (with `framer-motion` or CSS)? It’ll make it look even better.
