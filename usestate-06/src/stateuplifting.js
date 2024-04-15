import { useState } from "react"

/**
 * when two or more components are sharing common state, then move that common state to the nearest ancestor of those component
 */
const Inc = ({ setCount }) => {
    return <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
}

const Dec = ({ setCount }) => {
    return <button onClick={() => setCount(prev => prev - 1)}>decrement</button>
}

const StateUplifting = () => {
    const [count, setCount] = useState(10);

    return (
        <div>
            <Inc setCount={setCount} />
            {/* Inc({ setCount: setCount }) */}
            <span>{count}</span>
            <Dec setCount={setCount} />
        </div>
    )
}

export default StateUplifting;