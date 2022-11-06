import React,{useEffect,useState} from 'react'
import axios from 'axios'

function DataFetch() {

  const [posts,setPosts] = useState({})
  const [text,setText] = useState(1)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${text}`)
    .then(res=>{
      setPosts(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  })
  
  return (
    <div>
      <input type='text' value={text} onChange={e=>setText(e.target.value)}  />
      <div>{posts.title }</div>
        {/* <ul>
           {
            posts.map(post=>{
              return <li key={post.id}>{post.title}</li>
            })
           }
        </ul> */}
    </div>
  )
}

export default DataFetch