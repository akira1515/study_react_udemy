import { useState } from 'react';

const Example = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);

    const clickHandlerA = () => {
        setCountA(countA + 1);
    }
    const clickHandlerB = () => {
        setCountB(countB + 1);
    }
    const clickHandlerC = () => {
        setCountC(countC + 1);
    }
    return (
        <>
            <h3>ボタンAを{countA}回押しました</h3>
                <button onClick={clickHandlerA}>ボタンA</button>
            <h3>ボタンBを{countB}回押しました</h3>
                <button onClick={clickHandlerB}>ボタンA</button>
            <h3>ボタンCを{countC}回押しました</h3>
                <button onClick={clickHandlerC}>ボタンA</button>
        </>
    )
};

export default Example;
