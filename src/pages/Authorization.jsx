import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../bff';
import { useState } from 'react';
import { Button, Input, H2 } from './../components';
import { Link, Navigate } from 'react-router-dom';
import { setUser } from '../store/actions';
import { selectUserRole } from '../selectors';
import { ROLE } from '../bff/constants';
import { userResetForm } from '../hooks';


const authFormScheme = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Неверный логин, допускаются только буквы и цифры')
    .min(3, 'Неверный логин, миниму 3 символа')
    .max(15, 'Неверный логин, максимум 15 символов'),
  password: yup
    .string()
    .required('Заполните поле')
    .matches(
      /^[\w#%]+$/,
      'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %'
    )
    .min(5, 'Неверно заполнен пароль. Минимум 5 символов')
    .max(30, 'Неверно заполнен пароль. Максимум 50 символов'),
});

export default function authorization() {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormScheme),
  });

  const [serverError, setServerError] = useState(null)

  const dispatch = useDispatch()
  const roleId = useSelector(selectUserRole)

  userResetForm(reset)

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(error)
        return
      }

      dispatch(setUser(response))
      sessionStorage.setItem('userData', JSON.stringify(response))
    });
  };

  const formError = errors?.login?.message || errors?.password?.message
  const errorMessage =  formError || serverError

  if(roleId !== ROLE.GUEST) {
    return <Navigate to='/' />
  }
  
  return (
    <div>
      <H2>Авторизация</H2>
      <form
        className='flex flex-col justify-center items-center gap-10 mt-5'
        onSubmit={handleSubmit(onSubmit)}
        action=''
      >
        <Input type={'text'} placeholder={'Введите текст...'} {...register('login',  {
          onChange: () => setServerError(null)
        })}/>
        <Input type={'password'} placeholder={'Введите пароль...'} {...register('password', {
          onChange: () => setServerError(null)
        })}/> 
        <Button text={'Авторизоваться'} type='submit' disabled={!!formError} />
        <Link to='/register'>
          <Button text={'Регистрация'} type='submit' disabled={!!formError} />
        </Link>
        { errorMessage && <div className='text-rose-600'>{errorMessage}</div>}
      </form>
    </div>
  );
}
