import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [history, setHistory] = useState([]);

    const counterHandler = (amount) => {
        const newCount = counter + amount;
        setCounter(newCount);
        setHistory(prev => [
            {
                id: Date.now(),
                action: amount > 0 ? `+${amount}` : `${amount}`,
                result: newCount
            }, ...prev,
        ].slice(0,10))
    }

    const resetCounter = () => {
        setCounter(0)
        setHistory([]);
    }
  return (
 <div className="counter">
    <div className="counter_display">
        <div className="counter_value">{counter}</div>
    </div>
    <div className="counter_controls">
        <button onClick={() => counterHandler(-10)}>-10</button>
        <button onClick={() => counterHandler(-1)}>-1</button>
        <button onClick={resetCounter}>Reset</button>
        <button onClick={() => counterHandler(1)}>+1</button>
        <button onClick={() => counterHandler(10)}>+10</button>
    </div>
    {history.length > 0 && (
        <div className="counter_history">
            <h3>History</h3>
            <ul>
                {history.map(entry => (
                    <li key={entry.id}>
                        <span className={entry.action.startsWith("+") ? "positive" : "negative"}>
                            {entry.action}
                        </span>
                        <span> → {entry.result}</span>
                    </li>
                ))}
            </ul>
        </div>
    )}
 </div>
  )
}

export default Counter