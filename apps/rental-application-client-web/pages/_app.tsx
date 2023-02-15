import { AppProps } from 'next/app';
import { store } from '@rch/store';
import { Provider } from 'react-redux';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default CustomApp;
