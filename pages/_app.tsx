import React from "react";
import { AppProps } from "next/app";
import "@styles/app.scss";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@components/global/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
