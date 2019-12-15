const expree = require('express')
const app = expree()

app.get('/api/course/list',(req,res)=>{
    //支持跨域调用
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,PUT')
    res.header('Content-Type','application/json;charset=utf-8')
    res.json({
        code:0,
        list:[
            {name:"web",id:1},
            {name:"js",id:2},
            {name:"node.js",id:3},
            {name:"java",id:4}
        ]
    })
})

app.listen(9090,()=>{
    console.log("api test ready")
})