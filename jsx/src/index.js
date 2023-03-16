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

    return <input style={{border: '3px solid red'}} type={inputType} min={minValue} max='100' step='1' defaultValue='50' />
    // return <input type='number' min='0' max='100' step='1' defaultValue='50' />
}
// Show the component on the screen
root.render(<App />);