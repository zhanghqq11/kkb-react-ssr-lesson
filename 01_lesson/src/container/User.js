import React from 'react';
import {connect} from 'react-redux'
import {getUserInfo} from '../store/user'

function User(props){
    console.log(props)
    return (<div>
         <h1>hello {props.userinfo.name} , the best people is{props.userinfo.best} </h1>
        </div>)
}
Index.loadData = (store)=>{
    return store.dispatch(getUserInfo())
}

export default connect(
    state=>{
        console.log(state)
        return{
            userinfo:state.data.userinfo
        }
    }
    // ,{getUserInfo}
)(User);
