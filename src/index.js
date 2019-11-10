import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();