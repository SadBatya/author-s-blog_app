export default function Header() {
  return (
    <header className="flex justify-between p-3 shadow-lg fixed w-screen bg-white">
      <div className="flex gap-1 items-center">
        <i className="fa fa-code text-6xl" aria-hidden='true'></i>
        <div className="text-start">
          <div className="text-4xl font-bold">Блог</div>
          <div className="text-xl font-medium">веб-разработчика</div>
        </div>
      </div>
      <div>
        <p>Веб-технологии</p>
        <p>Написание кода</p>
        <p>Разбор ошибок</p>
      </div>
      <div>
        <div>
          <span>UserName</span>
          <i className=""></i>
        </div>
        <div></div>
      </div>
    </header>
  )
}
