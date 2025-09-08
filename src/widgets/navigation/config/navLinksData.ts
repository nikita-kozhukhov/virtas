interface navLinksData {
  id: number;
  title: string;
  href: string;
}

export const navLinksData: navLinksData[] = [
  { id: 1, title: 'Главная', href: '/' },
  { id: 2, title: 'О проекте', href: '/about' },
  { id: 3, title: 'Обратная связь', href: '/feedback' },
  { id: 4, title: 'Что-то еще', href: '/somethink' },
];
