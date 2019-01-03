import React from 'react';
import { render } from 'react-dom'
import store from "./redux_config/Store"
import './index.css';
import { Provider } from "react-redux"
import App from './App';

render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));