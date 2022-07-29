import "./App.css";
import { useState } from "react";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ` $1`);
};

const App = () => {
  const [bgColor, setBgColor] = useState("red");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: checked ? "grey" : bgColor }}
        onClick={() => {
          setBgColor(bgColor === "blue" ? "red" : "blue");
        }}
        disabled={checked}
      >
        Change to {bgColor === "blue" ? "red" : "blue"}
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
