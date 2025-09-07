import { Provider } from 'react-redux';

import { store } from 'store/store';

import { MainLayout } from 'widgets/main-layout';

import type { AppProps } from 'next/app';

import 'styles/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
