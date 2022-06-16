import { useState } from "react";

export function Counter() {
    const [fgCount, setFgCount] = useState(255);

    const [redCount, setRedCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const [blueCount, setBlueCount] = useState(0);
    
    return (
        <div>
            <p>
                Color swap: <span>r{redCount},g{greenCount},b{blueCount},fg{fgCount}</span>
                <span style={{
                    backgroundColor: `rgb(${redCount}, ${greenCount}, ${blueCount})`,
                    color: `rgb(${fgCount}, ${fgCount}, ${fgCount})`,
                    }}>***</span>
            </p>
            <div>
                <button onClick={(e) => setRedCount(redCount + 1)}>R + 1</button>
                <button onClick={(e) => setGreenCount(greenCount + 1)}>G + 1</button>
                <button onClick={(e) => setBlueCount(blueCount + 1)}>B + 1</button>
            </div>
            <div>
                <button onClick={(e) => setRedCount(redCount - 1)}>R - 1</button>
                <button onClick={(e) => setGreenCount(greenCount - 1)}>G - 1</button>
                <button onClick={(e) => setBlueCount(blueCount - 1)}>B - 1</button>
            </div>
            <div>
                <button onClick={(e) => setFgCount(fgCount - 1)}>Fg - 1</button>
                <button onClick={(e) => setFgCount(fgCount - 10)}>Fg - 10</button>
                <button onClick={(e) => setFgCount(fgCount - 20)}>Fg - 20</button>
            </div>
            <div>
                <button onClick={(e) => setFgCount(fgCount + 1)}>Fg + 1</button>
                <button onClick={(e) => setFgCount(fgCount + 10)}>Fg + 10</button>
                <button onClick={(e) => setFgCount(fgCount + 20)}>Fg + 20</button>
            </div>
        </div>
    )
}