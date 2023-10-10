import { useState, useEffect } from "react"
import Post from "./Post"
import axios from "axios"
import "./App.css"

const App = () => {
  const [posts, setPosts] = useState([])
  // const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    (async () => {
      try{
        const response = await axios.get(('https://jsonplaceholder.typicode.com/todos'))
        setPosts(response.data)
      } catch (err) {
        console.log(err)
      }
    })()
  },[])

  const handleDelete = (id) => {
    const newPost = posts.filter((post) => post.id !== id)
    setPosts(newPost)
  }

  return (
    <div>
      <ul>
       {posts.map((post) => 
        <Post 
          key={post.id} 
          post={post} 
          handleDelete={handleDelete} 
        /> )}
      </ul>
    </div>
  )
}

export default App