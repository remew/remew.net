import React from 'react';

const FOOTER_HEIGHT = 44;

export default function Footer(props: any): any {
    return (
      <>
        <footer>© 2015-2019 remew.net</footer>
        <style jsx>{`
        footer {
          background: #000;
          color: #fff;
          height: ${FOOTER_HEIGHT}px;
          line-height: ${FOOTER_HEIGHT}px;
          text-align: center;
        }
        `}</style>
      </>
    );
}
