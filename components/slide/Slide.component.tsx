import { Pages } from '@domain/Pages';
import { useTranslation } from 'next-i18next';
import React from 'react';

export const Slide: React.FC<{ page: Pages }> = ({ page }: { page: Pages }) => {
  const { t } = useTranslation('common');

  return (
    <article>
      <h3>{t(`pages.${page}`)}</h3>
    </article>
  );
};
