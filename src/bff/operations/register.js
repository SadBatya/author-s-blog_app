import { getUser, addUser } from "../api";
import { sessions } from "../sessions";

export const register = async (regLogin, regPassword) => {
  const existedUser = await getUser(regLogin);

  if (existedUser) {
    return {
      error: 'Такого пользователь уже существует',
      response: null,
    };
  }

  const user = await addUser(regLogin, regPassword);

  return {
    error: null,
    response: {
      id: user.id,
      login: user.login,
      roleId: user.role_id,
      session: sessions.create(user),
    },
  };
}