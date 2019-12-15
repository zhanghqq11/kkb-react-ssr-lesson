# kkb-react-ssr-lesson
kkb-ssr-lesson

#### 作业

1. 降级渲染。

给所有promise一个空的异常处理函数

```react
    Promise.all(promises.map(e =>{
        e.catch(e =>null)
    }).then(()=>{}))
```

#### 总结

其实做ssr就是同构。

##### 通过babel转义node和react代码。

##### 通过webpack来编译处理

##### serverConfig和clientConfig配置。

 借助`webpack`第三方模块`webpack-node-externals`来进行处理 



#### 复杂的交互需要redux

想要首屏渲染数据，需要提前加载，或者请求数据。