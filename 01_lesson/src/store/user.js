import axios from 'axios'
//首页的逻辑
const GET_LIST = 'INDEX_GET_LIST'

// actionCreater
const CHANGE_LIST = list=>({
    type: GET_LIST,
    list
})

export const getIndexList = server=>{
    return (dispatch,getState,axiosInstance)=>{
        return axios.get('http://localhost:9090/api/user/info').then(res=>{
            const {data} = res.data
            console('用户信息',data)
            dispatch(CHANGE_LIST(data))
        })
    }
}

const defaultState = {
    userinfo:[]
}

export default (State = defaultState, action)=>{
    switch(action.type){
        case GET_LIST:
            const newState = {
                ...State,
                userinfo: action.data
            }
            return newState
        default:
            return State
    }
}