import { useDispatch } from "react-redux";
import { H2, Icon } from "../components"
import { UserInfo } from '../components'
import { Link } from "react-router-dom";

export default function Users() {
  const users = [];
  const dispatch = useDispatch()

  return (
    <div>
      <H2>Пользователи</H2>
      <div>
        <div className="flex w-2/4 m-auto justify-between pt-5">
          <p>Логин</p>
          <p>Дата регистрации</p>
          <p>Роль</p>
        </div>
        <div>
          <UserInfo />
          {UserInfo.map(({ id, login, registeredAt, roleId}) => (
            <div>{login}</div>
          ))}
        </div>
        
      </div>
    </div>
  )
}
