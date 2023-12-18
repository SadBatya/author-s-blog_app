import { Link, useNavigate } from 'react-router-dom'
import { Icon } from './index'
export default function ControlPanel() {
  const navigate = useNavigate()
  return (
    <div>  
      <Link to='/login'>
        <button>
          <span>Войти</span>
          <Icon />
        </button>
      </Link>
      <div className='flex gap-3 justify-end items-center mt-2'>
        <Link onClick={() => navigate(-1)}><Icon id={'fa-backward'} parameters={'text-xl'}/></Link>
        <Link to='/register'><Icon id={'fa-file-text-o'} parameters={'text-xl'}/></Link>
        <Link to='/users'><Icon id={'fa-users'} parameters={'text-xl'}/></Link>
      </div>
    </div>
  )
}
