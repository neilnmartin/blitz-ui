import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import store from './redux/store/store'
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();