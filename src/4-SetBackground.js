import { useState } from "react";

// Create a select dropdown that updates the background color of the page when a new color is selected.
export const SetBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const divStyles = {
    background: backgroundColor,
    width: "400px",
    height: "150px",
    textAlign: "center",
  };
  const handleMenuChange = (e) => {
    setBackgroundColor(e.target.value);
  };
  return (
    <div className="menu-background">
      <h2>Set Background Color</h2>
      <div style={divStyles}>
        <select value={backgroundColor} onChange={handleMenuChange}>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="greenyellow">Greenyellow</option>
          <option value="aqua">Aqua</option>
        </select>
      </div>
    </div>
  );
};
