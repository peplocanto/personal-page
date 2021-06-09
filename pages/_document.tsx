import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';
import NextDocument from 'next/document';
import React from 'react';

export default class Document extends NextDocument {
  static async getInitialProps(ctx): Promise<{
    head: any[];
    styles: JSX.Element[];
    html: string;
  }> {
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => materialUiSheets.collect(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        head: [],
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } catch {
      console.log('styles error');
      return {
        head: [],
        styles: [<React.Fragment key="styles" />],
        html: '',
      };
    }
  }
}
