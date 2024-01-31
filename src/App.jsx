import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Main, Footer} from './components/index'
import { Authorization, Registration, Users, Post } from './pages';

function App() {
  return (
    <div className='flex justify-between flex-col text-center min-h-screen'>
      <Header />
      <Main>
        <Routes>
           <Route path='/' element={<div>Главная страница</div>} />
           <Route path='/login' element={<Authorization />} />
           <Route path='/register' element={<Registration />} />
           <Route path='/users' element={<Users />} />
           <Route path='*' element={<div>Главная страница</div>} />
           <Route path='*' element={<div>Посты</div>} />
           <Route path='/post/:id' element={<Post />} />
           <Route path='*' element={<div>Ошибка доступа</div>} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
