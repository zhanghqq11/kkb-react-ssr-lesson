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
        return axios.get('http://localhost:9090/api/course/list').then(res=>{
            const {list} = res.data
            dispatch(CHANGE_LIST(list))
        })
    }
}

const defaultState = {
    list:[]
}

export default (State = defaultState, action)=>{
    switch(action.type){
        case GET_LIST:
            const newState = {
                ...State,
                list: action.list
            }
            return newState
        default:
            return State
    }
}