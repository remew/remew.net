import React, {useContext, useCallback} from 'react';

import ThemeContext from '../Themes/context';

import scorpionSvg from '../assets/images/scorpion.svg';

export default function ScorpionIcon() {
  const {type, theme, changeTheme} = useContext(ThemeContext);
  const onClick = useCallback(() => {
    if (type === 'light') {
      changeTheme('dark');
    }
    else {
      changeTheme('light');
    }
  }, [type]);
  return (
    <div className={'root'} onClick={onClick}>
      <img src={scorpionSvg} alt={'scorpion icon'} />
      <style jsx>{`
        .root {
          background-color: ${theme.iconBackgroundColor};
          border-radius: 98px;
          box-shadow: 0 3px 8px 1px rgba(0,0,0,0.22);
          cursor: pointer;
          display: flex;
          height: 196px;
          justify-content: center;
          width: 196px;
        }
        img {
          width: 148px;
        }
      `}</style>
    </div>
  );
}

