import React from 'react';
import "babel-polyfill";
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react'
import { HashRouter } from 'react-router-dom';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import {LocaleProvider} from 'antd-mobile';
import 'moment/locale/zh-cn';

import GlobalModel from './GlobalModel';
import App from './App';

const globalModel = new GlobalModel();

ReactDom.render(
    // 使用 Provider 将 globalModel 传递给包裹住的所有组件及子组件
    <Provider globalModel={ globalModel }>
        <LocaleProvider locale={enUS}>
            <HashRouter>
                <App />
            </HashRouter>
        </LocaleProvider>
    </Provider>,
    document.querySelector('#root')
);