import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import http from './until/http'
import timer from './until/timer'
React.Component.prototype.http=http
React.Component.prototype.$timer=timer
ReactDOM.render(<App/>, document.getElementById('root'));