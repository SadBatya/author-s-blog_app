export const getPost = async (postId) =>
  fetch(`http://localhost:3005/posts/${postId}`)
    .then((loadedPost) => loadedPost.json())
    .then(
      (loadedPost) =>
        loadedPost && {
          id: loadedPost.id,
          title: loadedPost.title,
          content: loadedPost.content,
          imageUrl: loadedPost.image_url,
          publishedAt: loadedPost.published_at,
        }
    );

