import React ,{useState} from 'react';
import {Route} from 'react-router-dom';
import Index from './container/index'
import About from './container/About'

// export default (
//     <div>
//         <Route path='/' exact component={Index}></Route>
//         <Route path='/About' exact component={About}></Route>
//     </div>
// )
// 改造成js得配置
export default[
    {
        path:"/",
        component:Index,
        exact:true,
        key:"index"
    },
    {
        path:"/About",
        component:About,
        exact:true,
        key:"about"
    }
]
