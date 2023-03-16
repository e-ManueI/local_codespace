// Import React and React-DOM libraires
import React from "react";
import ReactDOM  from "react-dom/client";

// Get a reference to the div with ID ROOT
const el = document.getElementById('root');


// Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
    // const date = new Date();
    // const time = date.toLocaleTimeString();
    return <h1>{new Date().toLocaleTimeString()}</h1>;
}

// Show the component on the screen
root.render(<App />);