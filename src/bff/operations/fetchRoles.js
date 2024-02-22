import { getRoles } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchRoles = async (hash) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles)
  
  if (!access) {
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
