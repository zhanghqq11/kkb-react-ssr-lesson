import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import routes from '../src/App'
import {getClientStore} from '../src/store/store'
import Header from '../src/component/Header'

const Page = 
(<Provider store={getClientStore}>
    <BrowserRouter>
    <Header></Header>
    {routes.map(route=><Route {...route}></Route>)}
    </BrowserRouter>
</Provider>)
// 注水 客户端入口
ReactDOM.hydrate(Page, document.getElementById('root'))
