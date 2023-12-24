import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../bff';
import { useEffect, useState } from 'react';
import { Button, Input, H2 } from './../components';
import { Navigate } from 'react-router-dom';
import { setUser } from '../store/actions';
import { selectUserRole } from '../selectors';
import { ROLE } from '../bff/constants';

const regFormScheme = yup.object().shape({
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
  passcheck: yup
    .string()
    .required('Заполните повтор пароля')
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

export default function registration() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
      passcheck: '',
    },
    resolver: yupResolver(regFormScheme),
  });

  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();
  const store = useStore();
  const roleId = useSelector(selectUserRole);

  useEffect(() => {
    let currenWasLogout = store.getState().app.wasLogout;

    return store.subscribe(() => {
      let prevWasLogout = currenWasLogout;
      currenWasLogout = store.getState().app.wasLogout;

      if (currenWasLogout !== prevWasLogout) {
        reset();
      }
    });
  }, [reset, store]);

  const onSubmit = ({ login, password }) => {
    server.register(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(error);
        return;
      }
      dispatch(setUser(response));
    });
  };

  const formError =
    errors?.login?.message ||
    errors?.password?.message ||
    errors?.passcheck?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <H2>Регистрация</H2>
      <form
        className='flex flex-col justify-center items-center gap-10 mt-5'
        onSubmit={handleSubmit(onSubmit)}
        action=''
      >
        <Input
          type={'text'}
          placeholder={'Введите текст...'}
          {...register('login', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type={'password'}
          placeholder={'Введите пароль...'}
          {...register('password', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type={'password'}
          placeholder={'Повторите пароль...'}
          {...register('passcheck', {
            onChange: () => setServerError(null),
          })}
        />
        <Button
          text={'Зарегистрироваться'}
          type='submit'
          disabled={!!formError}
        />
        {errorMessage && (
          <div className='text-rose-600 bg-blue-200 p-3 border-lg'>
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
