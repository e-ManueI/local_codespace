// Import React and React-DOM libraires
import React from "react";
import ReactDOM  from "react-dom/client";

// Get a reference to the div with ID ROOT
const el = document.getElementById('root');


// Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
    return (
        <div>
            <textarea autoFocus={true} />
            <hr></hr>
            <input maxLength={5} spellCheck={false} />
            <hr></hr>
            <input className="divider" maxLength={5} spellCheck={false} />
            <hr></hr>
            <input style={{textDecoration: 'none', padding: '5px'}} maxLength={5} spellCheck={false} />
        </div>
    )
}
// Show the component on the screen
root.render(<App />);