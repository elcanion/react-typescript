import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Click Counter: {count}</p>
            <button onClick={(e) => setCount(count + 1)}>Click me</button>
        </div>
    )
}