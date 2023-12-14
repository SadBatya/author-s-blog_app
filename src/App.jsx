import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';


const Header = () => <div>Шапка</div>
const Footer = () => <div>Футер</div>
const Main = () => <div>Контент страницы</div>

function App() {
  return (
    <div className='flex text-center justify-between flex-col'>
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
