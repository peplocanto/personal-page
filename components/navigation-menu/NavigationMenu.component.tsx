import { MENU_ID, PAGES } from '@domain/Constants';
import { Pages } from '@domain/Pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import classes from './NavigationMenu.module.scss';
import { getItemIcon, getUserClass } from './NavigationMenu.utils';

const NavigationMenuItemIcon: React.FC<{ page: Pages; isActive: boolean }> = ({
  page,
  isActive,
}: {
  page: Pages;
  isActive: boolean;
}) => {
  return (
    <div
      className={clsx(isActive && classes.iconActive, classes.icon, classes[getUserClass(page)])}
    >
      <FontAwesomeIcon icon={getItemIcon(page)} />
    </div>
  );
};

const NavigationMenuItemLabel: React.FC<{ page: Pages; isActive: boolean }> = ({
  page,
  isActive,
}: {
  page: Pages;
  isActive: boolean;
}) => {
  const { t } = useTranslation('common');
  return (
    <div
      className={clsx(isActive && classes.labelActive, classes.label, classes[getUserClass(page)])}
    >
      <span>{t(`pages.${page}`)}</span>
    </div>
  );
};

const NavigationMenuItem: React.FC<{ page: Pages; activePage: Pages }> = ({
  page,
  activePage,
}: {
  page: Pages;
  activePage: Pages;
}) => {
  const [isActive, setIsActive] = useState<boolean>();
  useEffect(() => {
    setIsActive(page === activePage);
  }, [activePage]);

  return (
    <a href={`#${page}`} className={classes.item}>
      <NavigationMenuItemIcon isActive={isActive} page={page} />
      <NavigationMenuItemLabel isActive={isActive} page={page} />
    </a>
  );
};

export const NavigationMenu: React.FC<{ activePage: Pages }> = ({
  activePage,
}: {
  activePage: Pages;
}) => {
  return (
    <div className={classes.root}>
      <ul id={MENU_ID} className={classes.menu}>
        {PAGES.map((page: Pages) => (
          <NavigationMenuItem key={page} page={page} activePage={activePage} />
        ))}
      </ul>
    </div>
  );
};
