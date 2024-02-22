import { Icon, ControlPanel } from './index'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex justify-between p-5 shadow-lg fixed w-screen bg-white">
      <Link to='/' className="flex gap-1 items-center" >
        <Icon id={'fa-code'} parameters={'text-6xl'}/>
        <div className="text-start">
          <div className="text-4xl font-bold">Блог</div>
          <div className="text-xl font-medium">веб-разработчика</div>
        </div>
      </Link>
      <div>
        <p>Веб-технологии</p>
        <p>Написание кода</p>
        <p>Разбор ошибок</p>
      </div>
      <ControlPanel />
    </header>
  )
}
