import { Link } from "react-router-dom"
import { Icon } from './index'
import { ROLE } from "../bff/constants"
import { useDispatch } from "react-redux"



export default function UserInfo({ id, login, registeredAt, roleId }) {
  const dispatch = useDispatch()
  const roles = [];
  const users = []

  const onRoleChange = () => {

  }


  return (
    <div className="flex w-2/4 m-auto items-center gap-2 mt-2">
      <div key={id} className="flex w-full justify-between p-2 rounded-md border items-center">
        <p>Login {login}</p>
        <p>registeredAt {registeredAt}</p>
        <select value={roleId} onChange={onRoleChange}>
          {roles.map(({ id, name }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
        <p>Role {ROLE[roleId]}</p>
        <Link onClick={() => dispatch()}>
          <Icon id={'fa-floppy-o'} parameters={'text-xl'}/>
        </Link>
      </div>
      <Link onClick={() => dispatch()}>
        <Icon id={'fa-trash-o'} parameters={'text-xl'}/>
      </Link>
    </div>
  )
}
