import { Pages } from "./FullPage.model";

export const pages = Object.values(Pages) as Pages[];

export const fullpageOpts = {
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  anchors: pages,
  navigation: true,
  showActiveTooltip: false,
  navigationTooltips: ["Home", "About", "Portfolio", "Resume", "Contacs"],
};
