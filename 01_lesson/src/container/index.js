import React ,{useState} from 'react';

function Index(props){
    const [count,setCount] = useState(1);
    return <div>
         <h1>this is a index {props.title} ! {count} </h1>
         <button onClick={()=>setCount(count+1)}>add</button>
        </div>
}

export default Index;
