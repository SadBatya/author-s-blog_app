import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Main, Footer} from './components/index'

function App() {
  return (
    <div className='flex justify-between flex-col text-center min-h-screen'>
      <Header />
      <Main>
        <h2>Контент страницы</h2>
        <Routes>
           <Route path='/' element={<div>Главная страница</div>} />
           <Route path='/login' element={<div>Авторизация</div>} />
           <Route path='/register' element={<div>Регистрация</div>} />
           <Route path='/users' element={<div>Пользователи</div>} />
           <Route path='/post/:postId' element={<div>Главная страница</div>} />
           <Route path='/post/' element={<div>Главная страница</div>} />
           <Route path='*' element={<div>Ошибка</div>} />
           <Route path='*' element={<div>Ошибка доступа</div>} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
