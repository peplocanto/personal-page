import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/root/root.store';

const MyApp = ({ Component, pageProps }) => {
  const Seo = dynamic(() => import('@components/seo/Seo.component'));
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <Seo />
      <Component {...pageProps} />
    </Provider>
  );
};

export default appWithTranslation(MyApp);
