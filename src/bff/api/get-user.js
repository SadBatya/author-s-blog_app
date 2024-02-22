export const getUser = async (loginToFind) => {
  try {
    const response = await fetch(`http://localhost:3005/users?login=${loginToFind}`);
    const loadedUsers = await response.json();

    if (Array.isArray(loadedUsers) && loadedUsers.length > 0) {
      return loadedUsers.map((loadedUser) => ({
        id: loadedUser.id,
        login: loadedUser.login,
        password: loadedUser.password,
        registeredAt: loadedUser.registered_at,
        roleId: loadedUser.role_id,
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error('Ошибка при получении пользователя:', error);
    return [];
  }
};
