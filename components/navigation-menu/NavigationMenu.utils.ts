import { Pages } from '@domain/Pages';
import {
  faHome,
  faPaperPlane,
  faUserAstronaut,
  faUserGraduate,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

export const getItemIcon = (page: Pages) => {
  switch (page) {
    case Pages.HOME:
      return faHome;
    case Pages.ABOUT:
      return faUserAstronaut;
    case Pages.WORKS:
      return faUserTie;
    case Pages.RESUME:
      return faUserGraduate;
    case Pages.CONTACTS:
      return faPaperPlane;
  }
};

export const getUserClass = (page: Pages) => {
  switch (page) {
    case Pages.HOME:
      return 'home';
    case Pages.ABOUT:
      return 'user';
    case Pages.WORKS:
      return 'user';
    case Pages.RESUME:
      return 'user';
    case Pages.CONTACTS:
      return 'plane';
  }
};
