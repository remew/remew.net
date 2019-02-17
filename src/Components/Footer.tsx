import React, {useContext} from 'react';

import ThemeContext from '../Themes/context';

const FOOTER_HEIGHT = 44;

export default function Footer(props: any): any {
    const {theme} = useContext(ThemeContext);
    return (
      <>
        <footer>© 2015-2019 remew.net</footer>
        <style jsx>{`
        footer {
          background: ${theme.footerBackgroundColor};
          color: ${theme.footerTextColor};
          height: ${FOOTER_HEIGHT}px;
          line-height: ${FOOTER_HEIGHT}px;
          text-align: center;
        }
        `}</style>
      </>
    );
}
