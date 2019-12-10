// babel 已经在npm了
import React from 'react';
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from "../src/App.js"

const app = express()

app.get('/',(res,rep)=>{
    const Page = <App></App>
    // react =>解析成html
    const content = renderToString(Page)
})