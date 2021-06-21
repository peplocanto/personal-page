import { MENU_ID, PAGES } from '@domain/Constants';
import { Pages } from '@domain/Pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';
import { makeSelectActivePage } from '@store/ui/ui.selectors';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './NavigationMenu.styles';
import { getItemIcon, getUserClass } from './NavigationMenu.utils';

const NavigationMenuItemIcon: React.FC<{ page: Pages; isActive: boolean }> = ({
  page,
  isActive,
}: {
  page: Pages;
  isActive: boolean;
}) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(isActive && classes.iconActive, classes.icon, classes[getUserClass(page)])}
    >
      <FontAwesomeIcon icon={getItemIcon(page)} width="16" />
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
  const classes = useStyles();
  return (
    <div
      className={clsx(isActive && classes.labelActive, classes.label, classes[getUserClass(page)])}
    >
      <Typography variant="subtitle1">{t(`pages.${page}`)}</Typography>
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
  const classes = useStyles();
  const [isActive, setIsActive] = useState<boolean>();
  useEffect(() => {
    setIsActive(page === activePage);
  }, [activePage]);

  return (
    <li>
      <a href={`#${page}`} className={classes.item}>
        <NavigationMenuItemIcon isActive={isActive} page={page} />
        <NavigationMenuItemLabel isActive={isActive} page={page} />
      </a>
    </li>
  );
};

const NavigationMenu: React.FC = () => {
  const classes = useStyles();
  const activePage = useSelector(makeSelectActivePage());
  return (
    <aside className={classes.root}>
      <ul id={MENU_ID} className={classes.menu}>
        {PAGES.map((page: Pages) => (
          <NavigationMenuItem key={page} page={page} activePage={activePage} />
        ))}
      </ul>
    </aside>
  );
};

export default NavigationMenu;
