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
  }).then((createUser) => createUser.json())
};
