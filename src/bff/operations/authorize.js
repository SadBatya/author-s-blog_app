import { getUser } from "../api";
import { sessions } from "../sessions";

export const authorize = async(authLogin, authPassword) => {
  const user = await getUser(authLogin);

  if (!user) {
    return {
      error: 'Такого пользователь не найден',
      response: null,
    };
  }

  const { id, login, password, roleId } = user


  if (authPassword !== password) {
    return {
      error: 'Неверный пароль',
      response: null,
    };
  }

  return {
    error: null,
    response: {
      id,
      login,
      roleId,
      session: sessions.create(user),
    },
  };
}