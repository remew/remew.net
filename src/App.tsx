import React from 'react';

import {useThemeContextValue} from './Hooks';
import ThemeContext from './Themes/context';
import Main from './Main';

export default function App(props: any): any {
  const contextValue = useThemeContextValue();
  return (
    <ThemeContext.Provider value={contextValue}>
      <Main />
    </ThemeContext.Provider>
  );
}
