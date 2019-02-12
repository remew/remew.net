import React from 'react';

import Footer from './Components/Footer';

export default function App(props: any): any {
    return (
      <>
        <Footer />
        <style jsx global>{`
          html, body {
            background: #212121;
            height: 100%;
            position:relative;
          }
          body {
            margin: 0;
            -webkit-text-size-abjust:100%;
          }
        `}</style>
      </>
    );
}
