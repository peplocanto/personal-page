import { Pages } from '@domain/Pages';
import { actions } from '@store/ui/ui.store';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export const useActivePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const activePage =
    router.asPath === '/' ||
    !Object.keys(Pages).some((p) => p.includes(router.asPath.replace('/#', '')))
      ? Pages.HOME
      : (router.asPath.replace('/#', '') as Pages);
  const setActivePage = () => dispatch(actions.setActivePage(activePage));

  return { activePage, setActivePage };
};
