import { setPostData } from "./set-post-data"


export const addCommentAsync = (requestServer, userId, postId, content) => (dispatch) => {
  requestServer('addComment', userId, postId, content).then((postData) => {
    dispatch(setPostData(postData.response))
  })
}