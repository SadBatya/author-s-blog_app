export const getUsers = () => 
  fetch('http://localhost:3005/users')
    .then(loadedusers => loadedusers.json())