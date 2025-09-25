import { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { onCLS, onINP, onLCP, onTTFB } from 'web-vitals';

import { WebVitals } from 'shared/components/web-vitals/WebVitals';
import { AuthProvider } from 'shared/providers/SessionProvider';
import { StoreProvider } from 'shared/store/storeProvider';
import { MainLayout } from 'widgets/main-layout';

import 'styles/index.scss';

const sourceSansPro = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-source-sans-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Виртуальный помощник',
  description: 'Virtas - виртуальный помощник',
  icons: {
    icon: '/favicon.ico',
  },
};

function reportWebVitals(metric: any) {
  console.log('metric', metric);
}

if (typeof window !== 'undefined') {
  onCLS(reportWebVitals);
  onLCP(reportWebVitals);
  onINP(reportWebVitals);
  onTTFB(reportWebVitals);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSansPro.variable}>
      <body>
        <StoreProvider>
          <AuthProvider>
            <MainLayout>
              <WebVitals />
              {children}
            </MainLayout>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
