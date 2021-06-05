import { FullPage } from '@components/fullpage/FullPage.component';
import { GlobalSelector } from '@components/global-selector/GlobalSelector.component';
import { NavigationMenu } from '@components/navigation-menu/NavigationMenu.component';
import { Splash } from '@components/splash/Splash.component';
import { useActivePage } from '@hooks/useActivePage';
import { useTheme } from '@hooks/useTheme';
import { Main } from 'layouts/Main.layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect } from 'react';

const Home = () => {
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
