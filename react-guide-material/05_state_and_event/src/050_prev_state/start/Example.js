import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const countIncrease = () => {
        setCount(count + 1);
    }
    const countDecrease = () => {
        setCount(count - 1);
    }
    return (
        <>
            <p>現在のカウント数：{count}</p>
            <button onClick = {countIncrease}>+</button>
            <button onClick = {countDecrease}>-</button>
        </>
    )
};

export default Example;
