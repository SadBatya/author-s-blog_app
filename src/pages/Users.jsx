import { useDispatch } from "react-redux";
import { H2, Icon } from "../components"
import { UserInfo } from '../components'
import { Link } from "react-router-dom";

export default function Users() {
  const users = [
    {
      id: 1234,
      login: 'vladimir',
      registeredAt: '12-12-2023',
      roleId: 'guest'
    }
  ];
  const dispatch = useDispatch()

  return (
    <div>
      <H2>Пользователи</H2>
      <div>
        <div className="flex w-2/4 m-auto justify-between pt-5">
          <p>Логин</p>
          <p>Дата регистрации</p>
          <p>Роль</p>
          <p></p>
        </div>
        <div>
          <UserInfo />
          {users.map(({id, login, registeredAt, roleId }) => (
            <UserInfo key={id} id={id} login={login} registeredAt={registeredAt} roleId={roleId}/>
          ))}
        </div>
        
      </div>
    </div>
  )
}
