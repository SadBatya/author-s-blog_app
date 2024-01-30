import { Link } from "react-router-dom";
import { Icon } from "./index";
import { ROLE } from "../bff/constants";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useServerRequest } from "../hooks";

const UserInfo = ({ id, login, registeredAt, roleId: userRoleId, roles, userId, onUserRemove }) => {
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)

  const requestServer = useServerRequest()

  const [ ,setInitialRoleId] = useState(userRoleId)

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value))
  }

  const onRoleSave = (userId, newUserRoleId) => {
    requestServer('updateUserRole', userId, newUserRoleId).then(() => {
      setInitialRoleId(newUserRoleId)
    })
  }

  return (
    <div className="flex w-8/12 m-auto items-center gap-2 mt-2">
      <div className="flex w-full justify-between p-2 rounded-md border items-center">
        <p>
          <strong>Login:</strong> {login}
        </p>
        <p>
          <strong>Registered At:</strong> {registeredAt}
        </p> 
        <strong>Role:</strong> {ROLE[userRoleId]}
        <select value={selectedRoleId} onChange={onRoleChange}>
          {roles.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <p>
        </p>
        <Link to="#" onClick={() => onRoleSave(id, selectedRoleId)}>
          <Icon id={'fa-floppy-o'} parameters={'text-xl'}/>
        </Link>
      </div>
      <Link to="#" onClick={onUserRemove}>
        <Icon id={'fa-trash-o'} parameters={'text-xl'}/>
      </Link>
    </div>
  );
};

export default UserInfo;
