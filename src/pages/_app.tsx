import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import 'styles/index.scss';
import { MainLayout } from 'widgets/main-layout/ui/MainLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
