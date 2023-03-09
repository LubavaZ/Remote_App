import {useState} from 'react';
import React from 'react';

import './index.css';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="content">
            <p className="title">Count: {count}</p>
            <button className="button" onClick={() => setCount(prevState => prevState + 1)}>Add +</button>
        </div>
    );
};
