import { Pages } from '@domain/Pages';
import {
  faDev,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faEnvelope,
  faFileAlt,
  faPhoneAlt,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { LinkMenuItemProps } from './LinkMenu.model';

export const LINK_MENU_CONFIG: Record<Pages, LinkMenuItemProps[]> = {
  [Pages.HOME]: [],
  [Pages.ABOUT]: [
    { icon: faMediumM, label: 'links.medium', url: 'https://medium.com/@peplocanto' },
    { icon: faTwitter, label: 'links.twitter', url: 'https://twitter.com/peplocanto' },
    { icon: faInstagram, label: 'links.instagram', url: 'https://www.instagram.com/pep.locanto/' },
  ],
  [Pages.WORKS]: [
    { icon: faGithub, label: 'links.github', url: 'https://github.com/peplocanto' },
    { icon: faDev, label: 'links.devTo', url: 'https://dev.to/peplocanto' },
    { icon: faCode, label: 'links.codewars', url: 'https://www.codewars.com/users/peploc' },
  ],
  [Pages.RESUME]: [
    { icon: faLinkedinIn, label: 'links.linkedin', url: 'https://www.linkedin.com/in/peplocanto/' },
    { icon: faFileAlt, label: 'links.resume', url: '/files/GiuseppeLocantoCV.pdf' },
    { icon: faUniversity, label: 'links.studies', url: 'https://trello.com/peplocantocourses' },
  ],
  [Pages.CONTACTS]: [
    { icon: faPhoneAlt, label: 'links.phone', url: 'tel:+34621040209' },
    { icon: faEnvelope, label: 'links.mail', url: 'mailto:pep@peplocanto.com' },
  ],
};
