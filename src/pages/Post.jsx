import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { PostContent, Comments } from "../components"
import { useServerRequest } from "../hooks" 
import { loadPostAsync } from "../store/actions"
import { selectPost } from "../selectors"


export default function Post() {
  const dispatch = useDispatch()
  const params = useParams()
  const requestServer = useServerRequest()
  const post = useSelector(selectPost)

  useEffect(() => {
    dispatch(loadPostAsync(requestServer,params.id))
  }, [dispatch, requestServer, params.id])
  return (
    <div className="px-20 py-10">
      <PostContent post={post}/>
      <Comments comments={post.comments}/>
    </div>
  )
}
