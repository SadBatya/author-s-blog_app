import { useEffect } from "react"
import { useParams, useMatch } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { PostContent, Comments } from "../components"
import { useServerRequest } from "../hooks" 
import { loadPostAsync } from "../store/actions"
import { selectPost } from "../selectors"
import PostForm from "../components/PostForm"


export default function Post() {
  const dispatch = useDispatch()
  const params = useParams()
  const requestServer = useServerRequest()
  const post = useSelector(selectPost)
  const isEditing = useMatch('/post/:id/edit')
  

  useEffect(() => {
    dispatch(loadPostAsync(requestServer,params.id))
  }, [dispatch, requestServer, params.id])
   
  return (
    <div className="px-20 py-10">
      {isEditing ? (
        <PostForm post={post}/>
      ) : (
        <>
          <PostContent post={post}/>
          {post.comments && <Comments comments={post.comments} postId={post.id}/>}
        </>
      )}
      
    </div>
  )
}
