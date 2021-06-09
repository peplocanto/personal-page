import { MENU_ID } from '@domain/Constants';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeSelectActivePage } from '@store/ui/ui.selectors';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useSelector } from 'react-redux';
import { LINK_MENU_CONFIG } from './LinkMenu.config';
import { LinkMenuItemProps } from './LinkMenu.model';
import { useStyles } from './LinkMenu.styles';

const LinkMenuItemIcon: React.FC<{ icon: IconDefinition }> = ({
  icon,
}: {
  icon: IconDefinition;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.icon}>
      <FontAwesomeIcon icon={icon} width="16" />
    </div>
  );
};

const LinkMenuItemLabel: React.FC<{ label: string }> = ({ label }: { label: string }) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  return (
    <div className={classes.label}>
      <span>{t(label)}</span>
    </div>
  );
};

const LinkMenuItem: React.FC<{ item: LinkMenuItemProps }> = ({
  item,
}: {
  item: LinkMenuItemProps;
}) => {
  const classes = useStyles();

  return (
    <a href={item.url} target={'_blank'} rel="noreferrer" className={classes.item}>
      <LinkMenuItemIcon icon={item.icon} />
      <LinkMenuItemLabel label={item.label} />
    </a>
  );
};

export const LinkMenu: React.FC = () => {
  const classes = useStyles();
  const activePage = useSelector(makeSelectActivePage());
  return activePage && LINK_MENU_CONFIG[activePage].length ? (
    <aside className={classes.root}>
      <ul id={MENU_ID} className={classes.menu}>
        {LINK_MENU_CONFIG[activePage].map((item: LinkMenuItemProps) => (
          <LinkMenuItem key={item.label} item={item} />
        ))}
      </ul>
    </aside>
  ) : null;
};
