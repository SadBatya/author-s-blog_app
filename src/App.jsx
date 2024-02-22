import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Main, Footer} from './components/index'
import { Authorization, Registration, Users, Post } from './pages';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './store/actions';

function App() {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData')

    if(!currentUserDataJSON){
      return
    }

    const currentUserData = JSON.parse(currentUserDataJSON)

    dispatch(setUser({
      ...currentUserData,
      roleId: Number(currentUserData.roleId)
    }))
  }, [dispatch])

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
