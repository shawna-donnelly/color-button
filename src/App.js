import "./App.css";
import { useState } from "react";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ` $1`);
};

const App = () => {
  const [bgColor, setBgColor] = useState("MediumVioletRed");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: checked ? "grey" : bgColor }}
        onClick={() => {
          setBgColor(bgColor === "MidnightBlue" ? "MediumVioletRed" : "MidnightBlue");
        }}
        disabled={checked}
      >
        Change to {bgColor === "MidnightBlue" ? replaceCamelWithSpaces("MediumVioletRed") : replaceCamelWithSpaces("MidnightBlue")}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        defaultChecked={checked}
        aria-checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
};

export default App;
