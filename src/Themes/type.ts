export type ThemeType = 'light' | 'dark';

export type ThemeScheme = {
  backgroundImageUrl: string,

  contentBackgroundColor: string,

  tab: {
    backgroundColor: string,
    textColor: string,
    border: string,
  },

  footerBackgroundColor: string,
  footerTextColor: string,

  iconBackgroundColor: string,
};
