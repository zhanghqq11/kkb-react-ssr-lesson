import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from '../src/App'

const Page = <BrowserRouter>
    {App}
</BrowserRouter>
// 注水 客户端入口
ReactDOM.hydrate(Page, document.getElementById('root'))
