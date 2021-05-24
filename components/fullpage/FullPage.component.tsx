import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { fullpageOpts, pages } from "./FullPage.config";
import { Pages } from "./FullPage.model";

export const FullPage: React.FC<{}> = () => {
  return (
    <ReactFullpage
      {...fullpageOpts}
      render={() => (
        <ReactFullpage.Wrapper>
          {pages.map((page: Pages) => (
            <div key={page} className="section">
              <h1>{page}</h1>
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};
