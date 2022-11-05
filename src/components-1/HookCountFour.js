import React, { useState } from 'react'

function HookCountFour() {
   const [items,setItems] = useState([])   
 const addcount = ()=>{
    setItems([...items,{
        id:items.length,
        value:Math.floor(Math.random()*10) + 1
    }])
 }
   return (
    <div>
        <button onClick={addcount}>add</button>
       <ul>
        {items.map(item=><li key={item.key}>{item.value}</li>)}
       </ul>
    </div>
  )
}

export default HookCountFour