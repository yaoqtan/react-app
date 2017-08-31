import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App1 name="yao" />
        <App />
    </div>, document.getElementById('root'));
registerServiceWorker();
