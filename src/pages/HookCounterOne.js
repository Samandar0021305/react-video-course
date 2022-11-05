import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [names,setNames] = useState('')
    useEffect(()=>{
        document.title = `your clicked ${count} times`
        console.log('clicked')
    },[count])
  return (
    <div>
        <input type='text' value={names} onChange={e=>setNames(e.target.value)}  />
        <button onClick={()=>setCount(count+1)}>you click {count} times</button>
    </div>
  )
}

export default HookCounterOne