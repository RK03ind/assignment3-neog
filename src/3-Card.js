import { useState } from "react";

// Create a slider input in React which will set the border radius of a card on a change in the value of the range.
export const Card = () => {
  const [sliderState, setSliderState] = useState(0);
  const handleSliderChange = (e) => {
    setSliderState(e.target.value);
  };
  const cardStyle = {
    borderRadius: `${sliderState}px`,
  };
  return (
    <div className="round-card" style={cardStyle}>
      <h2>Card with rounded corners</h2>
      <label>Border Radius:</label>
      <input
        type="range"
        max={50}
        value={sliderState}
        onChange={handleSliderChange}
      />
    </div>
  );
};
