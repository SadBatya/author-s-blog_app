import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from './index'
import { Button } from './index'
import { selectUserRole, selectUserLogin, selectUserSession } from './../selectors/index'
import { ROLE } from '../bff/constants'
import { logout } from '../store/actions/logout'


export default function ControlPanel() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const roleId = useSelector(selectUserRole)
  const login = useSelector(selectUserLogin)
  const session = useSelector(selectUserSession)

  const onLogout = () => {
    dispatch(logout(session))
    sessionStorage.removeItem('userData')
    console.log('click')
  }

  return (
    <div>  
      <div>
        { roleId === ROLE.GUEST ? 
        <Link to='/login'><Button text={'Войти'}/> </Link> : 
        <Link className='flex items-center gap-1'>
          <div>{login}</div>
          <Icon id={'fa-sign-out'} parameters={'text-xl'} onClick={onLogout}/>
        </Link>
        }
      </div>
      <div className='flex gap-3 justify-end items-center mt-2'>
        <Link onClick={() => navigate(-1)}><Icon id={'fa-backward'} parameters={'text-xl'}/></Link>
        <Link to='/post'><Icon id={'fa-file-text-o'} parameters={'text-xl'}/></Link>
        <Link to='/users'><Icon id={'fa-users'} parameters={'text-xl'}/></Link>
      </div>
    </div>
  )
}
