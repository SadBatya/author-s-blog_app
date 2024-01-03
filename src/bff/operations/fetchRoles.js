import { getRoles } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchRoles = async (userSession) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: 'Доступ запрещен',
      response: null,
    };
  }

  const roles = await getRoles();

  return {
    error: null,
    response: roles,
  };
};
