'use client'

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(false);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() =>  setCount(count +1)}>Increment</button>
        </div>
    )
}