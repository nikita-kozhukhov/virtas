'use client';

import { useForm } from 'react-hook-form';

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log('Регистрация:', data);
  };

  const password = watch('password');

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Почта</label>
          <input
            id="email"
            type="email"
            placeholder="Введите почту"
            {...register('email', {
              required: 'Введите почту',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Некорректная почта',
              },
            })}
          />
        </div>

        {errors.email && <p>{errors.email.message}</p>}

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            placeholder="Введите пароль"
            {...register('password', {
              required: 'Введите пароль',
              minLength: {
                value: 6,
                message: 'Минимум 6 символов',
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: 'Только латиница и цифры',
              },
            })}
          />
        </div>

        {errors.password && <p>{errors.password.message}</p>}

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="repeate">Повторите пароль</label>
          <input
            id="repeate"
            type="password"
            placeholder="Повторите пароль"
            {...register('confirmPassword', {
              required: 'Повторите пароль',
              validate: (value) => value === password || 'Пароли не совпадают',
            })}
          />
        </div>

        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
