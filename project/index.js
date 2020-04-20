import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store/index.js'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './static/common.scss'
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);
