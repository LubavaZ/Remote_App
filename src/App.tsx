import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Counter} from './Counter';

const App = () => (
    <div className="container">
        <div className="content">Hello, world! This is a remote App</div>
        <Counter/>
    </div>
);
ReactDOM.render(<App/>, document.getElementById('app'));
