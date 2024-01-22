import { register, authorize, fetchUsers, fetchRoles, logout } from './operations'


export const server = {
  authorize,
  logout,
  register,
  fetchUsers,
  fetchRoles,
};
