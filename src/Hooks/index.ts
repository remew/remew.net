import React, {useCallback, useState} from 'react';

import {ThemeType, ThemeScheme} from '../Themes/type';
import LightTheme from '../Themes/light';
import DarkTheme from '../Themes/dark';

function getThemeValue(type: ThemeType): ThemeScheme {
  switch (type) {
    case 'light':
      return LightTheme;
    case 'dark':
      return DarkTheme;
    default:
      throw new Error(`Invalid theme type: ${type}`);
  }
}

export function useThemeContextValue() {
  const [themeType, setThemeType] = useState('dark' as ThemeType);
  const changeTheme = useCallback((type: ThemeType) => {
    setThemeType(type);
  }, []);

  return {
    type: themeType,
    theme: getThemeValue(themeType),
    changeTheme,
  };
}
