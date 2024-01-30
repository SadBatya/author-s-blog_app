import { register, authorize, fetchUsers, fetchRoles, logout, updateUserRole, removeUser } from './operations'


export const server = {
  authorize,
  logout,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole,
  removeUser
};
