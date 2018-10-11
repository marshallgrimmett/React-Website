import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "./images/iphone5_splash.png";
import "./images/iphone6_splash.png";
import "./images/iphoneplus_splash.png";
import "./images/iphonex_splash.png";
import "./images/ipad_splash.png";
import "./images/ipadpro1_splash.png";
import "./images/ipadpro2_splash.png";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
