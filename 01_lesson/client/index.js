import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from '../src/App'
import store from '../src/store/store'

const Page = 
(<Provider store={store}>
    <BrowserRouter>
    {App}
    </BrowserRouter>
</Provider>)
// 注水 客户端入口
ReactDOM.hydrate(Page, document.getElementById('root'))
