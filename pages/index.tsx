import { Splash } from '@components/splash/Splash.component';
import { useActivePage } from '@hooks/useActivePage';
import { useTheme } from '@hooks/useTheme';
import { Main } from 'layouts/Main.layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

const Home = () => {
  const GlobalSelector = dynamic(
    () => import('@components/global-selector/GlobalSelector.component'),
  );
  const NavigationMenu = dynamic(
    () => import('@components/navigation-menu/NavigationMenu.component'),
  );
  const FullPage = dynamic(() => import('@components/fullpage/FullPage.component'));
  const { theme, setTheme } = useTheme();
  const { setActivePage } = useActivePage();
  useEffect(() => {
    setActivePage();
  }, []);

  return (
    <Main theme={theme}>
      <Splash />
      <GlobalSelector theme={theme} setTheme={setTheme} />
      <NavigationMenu />
      <FullPage />
    </Main>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default React.memo(Home);
