//存储的入口
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import UserReducer from './user'

const reducer = combineReducers({
    index : indexReducer,
    user : UserReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

// export default store
export const getServerStore = ()=>{
    // 通过dispatch来获取和充实
    return createStore(reducer,applyMiddleware(thunk))
}

export const getClientStore = ()=>{
    const defaultState = window.__context ? window.__context:{}
    return createStore(reducer,defaultState,applyMiddleware(thunk))
} 