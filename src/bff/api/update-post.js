export const updatePost = ({ id, imageUrl, title, content}) => {
  fetch(`http://localhost:3005/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_url: imageUrl,
      title,
      content,
    }),
  }).then((updatedPost) => {
    updatePost.json()
  })
}
