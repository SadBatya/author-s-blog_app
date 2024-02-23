import { deleteComment, getPost, getComments } from '../api'
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removePostComment = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
  const access = await sessions.access(hash, accessRoles)
  
  if (!access) {
    return {
      error: 'Доступ запрещен',
      response: null,
    };
  }
  
  
  await deleteComment(id);
  
  const post = await getPost(postId)

  const comments = await getComments(postId)

  return {
    error: null,
    response: {
      ...post,
      comments,
    }
  };
}