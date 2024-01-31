import { getPost } from "../api";

export const fetchPost = async (postId) => {
  const post = await getPost(postId);

  return {
    error: null,
    response: post,
  };
};
