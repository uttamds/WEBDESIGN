import React, { useState } from 'react';

function Food() {
  const pricePerItem = 10; // Fixed price for the food item
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value) || 0;
    setQuantity(newQty);
  };

  const totalBill = pricePerItem * quantity;

  return (
    <div>
      <h2>Food Item</h2>
      <p>Price per item: ${pricePerItem}</p>

      <label htmlFor="qty">Quantity: </label>
      <input
        id="qty"
        type="number"
        min="0"
        value={quantity}
        onChange={handleQuantityChange}
      />

      <h3>Total Bill: ${totalBill}</h3>
    </div>
  );
}

export default Food;
