import Link from 'next/link';
export default function Custom404() {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, такой страницы не существует.</p>
      <Link href="/">Вернуться на главную</Link>
    </div>
  );
}
