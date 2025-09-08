'use client';

import { useForm } from 'react-hook-form';

// export const metadata = {
//   title: 'Авторизация | Virtas',
//   description: 'Авторизация пользователя.',
// };

type AuthFormData = {
  email: string;
  password: string;
};

export default function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const onSubmit = (data: AuthFormData) => {
    console.log('Форма отправлена:', data);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Почта</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Неверный формат email',
              },
            })}
          />
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Пароль обязателен',
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message:
                  'Пароль должен содержать только цифры и латинские буквы',
              },
            })}
          />
          {errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
