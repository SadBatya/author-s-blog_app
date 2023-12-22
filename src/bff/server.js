import { getUser } from './get-user';
import { addUser } from './add-User';
import { createSession } from './create-session';
import { sessions } from './sessions';
export const server = {
  
  async logout(session) {
    sessions.remove(session)
  },

  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: 'Такого пользователь не найден',
        response: null,
      };
    }
    if (authPassword !== user.password) {
      return {
        error: 'Неверный пароль',
        response: null,
      };
    }

  
    return {
      error: null,
      response: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user)
      },
    };
  },

  async register(regLogin, regPassword) {
    const user = await getUser(regLogin);

    if (user) {
      return {
        error: 'Такого пользователь уже существует',
        response: null,
      };
    }

    await addUser(regLogin, regPassword);

    return {
      error: null,
      response: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user)
      },
    };
  },
};
