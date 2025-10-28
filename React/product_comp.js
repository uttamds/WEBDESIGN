import React, { useState } from "react";

function Products() {
  // Declare a state variable called count, initialized to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increase = () => setCount(count + 1);

  // Function to decrement the count
  const decrease = () => setCount(count - 1);

  // Function to reset the count
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🛒 Product Counter</h2>
      <h3>Count: {count}</h3>

      <button onClick={increase}>+</button>
      <button onClick={decrease} style={{ margin: "0 10px" }}>
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Products;