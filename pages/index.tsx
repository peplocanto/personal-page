import { FullPage } from '@components/fullpage/FullPage.component';
import { LanguageSelector } from '@components/language-selector/LanguageSelector.component';
import { NavigationMenu } from '@components/navigation-menu/NavigationMenu.component';
import { Seo } from '@components/seo/Seo.component';
import { Pages } from '@domain/Pages';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Home() {
  const router = useRouter();

  const [activePage, setActivePage] = useState<Pages>(
    router.asPath ? (router.asPath.replace('/#', '') as Pages) : Pages.HOME,
  );

  return (
    <div id="main-container">
      <Seo />
      <main>
        <LanguageSelector />
        <NavigationMenu activePage={activePage} />
        <FullPage setActivePage={setActivePage} />
      </main>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
