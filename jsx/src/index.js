// Import React and React-DOM libraires
import React from "react";
import ReactDOM  from "react-dom/client";

// Get a reference to the div with ID ROOT
const el = document.getElementById('root');


// Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
    const inputType = "number";
    const minValue = 5;

    return <input style={{border: '3px solid red'}} type={inputType} min={minValue} max={50} defaultValue={10} />
}
// Show the component on the screen
root.render(<App />);