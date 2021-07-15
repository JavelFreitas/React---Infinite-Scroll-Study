import { FC, useState } from 'react'

const Counter: FC = () => {
    let [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => setCounter(counter-1)}>-</button> 
        </div>
    )
}

export default Counter;
