import { Seo } from '@components/seo/Seo.component';
import { appWithTranslation } from 'next-i18next';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/root/root.store';

const MyApp = ({ Component, pageProps }) => {
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
