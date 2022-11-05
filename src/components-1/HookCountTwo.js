import { useState } from "react";

 
function HookCounterTwo(){
  const initialValue = 0;
  const [count,setCount] = useState(initialValue)
  const fiveCount = ()=>{
    for(let i=0;i<5;i++){
        setCount(prev=>prev+1)
    }
  }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(initialValue)}>reset</button>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
            <button onClick={fiveCount}>increment 5+</button>
        </div>
    )
}

export default HookCounterTwo;