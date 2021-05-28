import { PAGES } from '@domain/Constants';
import { Pages } from '@domain/Pages';
import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import { fullpageOpts } from './FullPage.config';

export const FullPage: React.FC<{ setActivePage }> = ({
  setActivePage,
}: {
  setActivePage: (page: Pages) => void;
}) => {
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
                <h1>{page}</h1>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
