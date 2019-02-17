import React, {useCallback, useState} from 'react';

import LightTheme from '../Themes/light';
import DarkTheme from '../Themes/dark';

const themeMap = {
  light: LightTheme,
  dark: DarkTheme,
};

export function useThemeContextValue() {
  const [themeType, setThemeType] = useState('light');
  const changeTheme = useCallback(type => {
    setThemeType(type);
  }, []);

  return {
    type: themeType,
    theme: themeMap[themeType],
    changeTheme,
  };
}
