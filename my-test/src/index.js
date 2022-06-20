import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import App1 from "./components/DagreGraph/index";

import Graph11 from "./components/Neo4jD3";

ReactDOM.render(<Graph11 />, document.getElementById('root'));

registerServiceWorker();

