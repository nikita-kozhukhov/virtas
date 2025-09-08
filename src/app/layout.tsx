import { Providers } from 'app/providers';
import { MainLayout } from 'widgets/main-layout';

import type { Metadata } from 'next';

import 'styles/index.scss';

export const metadata: Metadata = {
  title: 'Виртуальный помощник',
  description: 'Virtas - виртуальный помощник',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
