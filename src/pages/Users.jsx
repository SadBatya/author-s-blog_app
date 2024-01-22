import { H2, UsersContent } from '../components';
import { UserInfo } from '../components';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../hooks';

export default function Users() {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
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

      setUsers(usersResponse.res);
      setRoles(rolesResponse.res);
      console.log(usersResponse.res)
      console.log(rolesResponse.res)
    });
  }, []);

  useEffect(() => {
    console.log(users); // Этот console.log вызывается после получения данных
  }, [users])
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
            <UserInfo />
            {users.map(({ id, login, registeredAt, roleId }) => (
              <UserInfo
                key={id}
                id={id}
                login={login}
                registeredAt={registeredAt}
                roleId={roleId}
                roles={roles}
              />
            ))}
          </div>
        </div>
      </UsersContent>
    </div>
  );
}
