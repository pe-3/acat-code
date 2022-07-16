import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './icon.css'
import App from './component/App/App';
import reportWebVitals from './reportWebVitals';
import * as echarts from 'echarts';
import 'antd/dist/antd.css';
import acat from './requests/reqs'

Component.prototype.echarts = echarts;
Component.prototype.acat = acat;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
