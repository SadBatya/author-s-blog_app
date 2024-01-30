import { H2, UsersContent } from '../components';
import { UserInfo } from '../components';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../hooks';
import { ROLE } from '../bff/constants';

export default function Users() {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false)
  const requestServer = useServerRequest();

  useEffect(() => {
    Promise.all([
      requestServer('fetchUsers'),
      requestServer('fetchRoles'),
    ]).then(([usersResponse, rolesResponse]) => {
      if (usersResponse.error || rolesResponse.error) {
        setErrorMessage(usersResponse.error || rolesResponse.error);
        return;
      }
      
      setUsers(usersResponse.response);
      setRoles(rolesResponse.response);
    });
  }, [requestServer, shouldUpdateUserList]);

  const onUserRemove = (userId) => {
    requestServer('removeUser', userId).then(() => {
      setShouldUpdateUserList(!shouldUpdateUserList)
    }) 
  }

  return (
    <div>
      <UsersContent error={errorMessage}>
        <H2>Пользователи</H2>
        <div>
          <div className='flex w-2/4 m-auto justify-between pt-5'>
            <p>Логин</p>
            <p>Дата регистрации</p>
            <p>Роль</p>
            <p></p>
          </div>
          <div>
            {users?.map(({ id, login, register_at, role_id }) => (
              <UserInfo
                key={id}
                id={id}
                login={login}
                registeredAt={register_at}
                roleId={role_id}
                roles={roles.filter(({ id: roleId  }) => roleId !== ROLE.GUEST)}
                onUserRemove={() => onUserRemove(id)}
              />
            ))}
          </div>
        </div>
      </UsersContent>
    </div>
  );
}
