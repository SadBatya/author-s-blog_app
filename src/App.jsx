import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Main, Footer} from './components/index'
import { Authorization } from './pages';
import Footer2 from './components/Footer2'
function App() {
  return (
    <div className='flex justify-between flex-col text-center min-h-screen'>
      <Header />
      <Main>
        <Routes>
           <Route path='/' element={<div>Главная страница</div>} />
           <Route path='/login' element={<Authorization />} />
           <Route path='/register' element={<Authorization />} />
           <Route path='/users' element={<div>Пользователи</div>} />
           <Route path='/post/:postId' element={<div>Главная страница</div>} />
           <Route path='/post/' element={<div>Главная страница</div>} />
           <Route path='*' element={<div>Ошибка</div>} />
           <Route path='*' element={<div>Ошибка доступа</div>} />
        </Routes>
      </Main>
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
