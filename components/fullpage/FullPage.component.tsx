import { Slide } from '@components/slide/Slide.component';
import { PAGES } from '@domain/Constants';
import { Pages } from '@domain/Pages';
import ReactFullpage from '@fullpage/react-fullpage';
import { actions } from '@store/ui/ui.store';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fullpageOpts } from './FullPage.config';

export const FullPage: React.FC = () => {
  const dispatch = useDispatch();
  const setActivePage = (page: Pages) => {
    dispatch(actions.setActivePage(page));
  };

  return (
    <ReactFullpage
      {...fullpageOpts}
      afterLoad={(_, destination) => {
        setActivePage(destination.anchor as Pages);
      }}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {PAGES.map((page: Pages) => (
              <div key={page} className="section">
                <Slide page={page} />
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
