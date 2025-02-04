import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import store from '../store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;