// import { useState } from 'react';

function App() {
    // const handleClick = () => {
    //     console.log('Button was clicked!')
    // };
    function makeArray() {
        return [1, 10, 32, 40];
    }
    const [firstElement, secondElement] = makeArray();
    console.log(firstElement, secondElement);
    // const myArray = makeArray()
    // const firstElement = myArray[0]
    // const secondElement = myArray[1]
    // const [count, SetCount] = useState(0);

    // const handleClick = () => {
    //     SetCount(count + 1);
    // };

    // return (
    //     <div>
    //         <button onClick={handleClick} >Add Animal</button>
    //         <div>Number of animals: {count}</div>
    //     </div>
    // );
}

export default App;