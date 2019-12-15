// 这里的node代码，会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import {StaticRouter,matchPath,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import routes from '../src/App'
import {getServerStore} from '../src/store/store'
import Header from '../src/component/Header'

const store = getServerStore()
const app = express()
app.use(express.static('pubilc'))

app.get('*',(req,res)=>{
    // 获取根据路由渲染出得组件，并且拿到loadData方法 获取数据。
    // inside a request
    const promises = [];
    // use `some` to imitate `<Switch>` behavior of selecting only
    // the first to match
    routes.some(route => {
    // use `matchPath` here
        const match = matchPath(req.path, route);
        if (match) {
            const {loadData} = route.component
            if(loadData){
                promises.push(loadData(store))
            }
        }
        return match;
    });

    Promise.all(promises).then(data => {
        // do something w/ the data so the client
        // can access it then render the app
        // const Page = <App title="dennis"></App>
        // react =>解析成html
        const content = renderToString(
                <Provider store = {store}>
                    <StaticRouter location={req.url}> 
                        <Header></Header>
                        {routes.map(route=><Route {...route}></Route>)}
                    </StaticRouter>
                </Provider>
            )
            res.send(`<html>
                <head>
                    <meta charset="utf-8"/>

                    <title>react ssr</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                        <script>
                            window.__content=${JSON.stringify(store.getState())}
                        </script>
                    <script src="/bundle.js"></script>
                </body>
            </html>`)
        })
    });
    
app.listen(9093,()=>{
    console.log("监听done")
})

