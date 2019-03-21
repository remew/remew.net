import React, {useContext, useEffect} from 'react';

import ThemeContext from './Themes/context';

export default function Main(props: any): any {
    const {theme} = useContext(ThemeContext);
    return (
      <>
        <div className={'container'}>
        </div>
        <style jsx global>{`
          html, body {
            height: 100%;
            position: relative;
          }
          body {
            background-image: url(${theme.backgroundImageUrl});
            background-size: cover;
            background-position: center;
            margin: 0;
            -webkit-text-size-abjust:100%;
          }
          body > div {
            height: 100%;
          }
          * {
            transition: background-image 0.3s,
                        background-color 0.3s,
                        color 0.3s;
          }
        `}</style>
        <style jsx>{`
          .container {
            display: grid;
            box-sizing: border-box;
            padding: 32px;
            height: 100%;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr;
            overflow: scroll;
          }
        `}</style>
      </>
    );
}
