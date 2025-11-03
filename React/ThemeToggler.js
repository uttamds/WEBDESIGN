import React, { useState } from "react";

function ThemeToggler() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={{
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
      padding: "20px",
      textAlign: "center"
    }}>
      <h2>{isDark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;
