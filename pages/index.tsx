import { FullPage } from '@components/fullpage/FullPage.component';
import { GlobalSelector } from '@components/global-selector/GlobalSelector.component';
import { NavigationMenu } from '@components/navigation-menu/NavigationMenu.component';
import { Seo } from '@components/seo/Seo.component';
import { Splash } from '@components/splash/Splash.component';
import { Pages } from '@domain/Pages';
import useIsMounted from 'hooks/useIsMounted';
import { useTheme } from 'hooks/useTheme';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const isMount = useIsMounted();

  const [activePage, setActivePage] = useState<Pages>(
    router.asPath ? (router.asPath.replace('/#', '') as Pages) : Pages.HOME,
  );

  return (
    <div id="main-container">
      <Seo />
      {isMount && (
        <main className={theme}>
          <Splash />
          <GlobalSelector theme={theme} setTheme={setTheme} />
          <NavigationMenu activePage={activePage} />
          <FullPage setActivePage={setActivePage} />
        </main>
      )}
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
