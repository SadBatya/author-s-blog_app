import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../bff';
import { useState } from 'react';

const authFormScheme = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Неверны логин, допускаются только буквы и цифры')
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
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormScheme),
  });

  const [serverError, setServerError] = useState('')

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(error)
      }
    });
  };

  const formError = errors?.login?.message || errors?.password?.message
  const errorMessage =  formError || serverError

  return (
    <div>
      <h2>Авторизация</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=''
      >
        <input
          type='text'
          placeholder='Введите логин...'
          {...register('login')}
        />
        <input
          type='password'
          placeholder='Введите пароль...'
          {...register('password')}
        />
        <button type='submit' disabled={!!formError}>Войти</button>
        { errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
}
