import { generateDate } from "./generateDate";

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
  .then(response => {
    // Проверяем успешность запроса (response.ok возвращает true для статусов 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Если запрос успешен, возвращаем результат
    return response.json();
  })
  .then(data => {
    // Обработка данных после успешного запроса
    console.log('User added successfully:', data);
  })
  .catch(error => {
    // Обработка ошибок
    console.error('Error adding user:', error.message);
  });
};
