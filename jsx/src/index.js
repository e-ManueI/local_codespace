// Import React and React-DOM libraires
import React from "react";
import ReactDOM  from "react-dom/client";

// Get a reference to the div with ID ROOT
const el = document.getElementById('root');


// Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
    return <textarea autoFocus={true} />
}
// Show the component on the screen
root.render(<App />);