import { generateDate } from '../utils';

export const addUser = (login, password) => {
  fetch('http://localhost:3005/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login,
      password,
      register_at: generateDate(),
      role_id: 2,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('User added successfully:', data);
    })
    .catch((error) => {
      console.error('Error adding user:', error.message);
    });
};
