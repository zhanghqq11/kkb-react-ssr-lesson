import axios from 'axios'
//首页的逻辑
const GET_LIST = 'INDEX/USER_INFO'

// actionCreater
const CHANGE_LIST = data=>({
    type: GET_LIST,
    data
})

export const getUserInfo = server=>{
    return (dispatch,getState,axiosInstance)=>{
        return axios.get('http://localhost:9090/api/user/info').then(res=>{
            const {data} = res.data
            console.log('用户信息',data)
            dispatch(CHANGE_LIST(data))
        })
    }
}

const defaultState = {
    userinfo:{}
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case GET_LIST:
            console.log(action.data)
            const newState = {
                ...state,
                userinfo: action.data
            }
            return newState
        default:
            return state
    }
}