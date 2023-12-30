import { Link } from "react-router-dom"
import { Icon } from './index'



export default function UserInfo({ id, login, registeredAt, roleId }) {


  return (
    <div className="flex w-2/4 m-auto items-center gap-2">
      <div key={id} className="flex w-full justify-between p-2 rounded-md border">
        <p>Login {login}</p>
        <p>registeredAt {registeredAt}</p>
        <p>Role {roleId}</p>
      </div>
      <Link onClick={() => dispatch()}>
        <Icon id={'fa-trash-o'} parameters={'text-xl'}/>
      </Link>
    </div>
  )
}
