import React from 'react'

 function Person({name}) {
  
    return (
     <div>
        {name.map(element =><h1>{element}</h1>)}
     </div>  
  )
}
export default Person