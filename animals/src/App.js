import { useState } from 'react';

function App() {
    // const handleClick = () => {
    //     console.log('Button was clicked!')
    // };

    const [count, SetCount] = useState(0);

    const handleClick = () => {
        SetCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick} >Add Animal</button>
            <div>Number of animals: {count}</div>
        </div>
    );
}

export default App;