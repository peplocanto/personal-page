import { FullPage } from '@components/fullpage/FullPage.component';
import { Seo } from '@components/seo/Seo.component';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className="container">
      <Seo />
      <main>
        <nav>
          <Link href="/" locale={router.locale === 'en' ? 'es' : 'en'}>
            <button>{t('title')}</button>
          </Link>
        </nav>
        <FullPage />
      </main>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
