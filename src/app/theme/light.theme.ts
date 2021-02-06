import { Theme } from './symbols';

export const lightTheme: Theme = {
  name: 'light',
  properties: {
    '--theme-background': 'hsl(0, 0%, 98%)',
    '--theme-elements': 'hsl(0, 0%, 100%)',
    '--theme-text': 'hsl(200, 15%, 8%)',
    '--theme-input': 'hsl(0, 0%, 52%)',
    '--theme-box-shadow': '0 0 5px rgba(0, 0, 0, 0.05)',
    '--theme-box-shadow-hov': '0 0 30px rgba(0, 0, 0, 0.15)',
    '--theme-box-shadow-large': '0 0 5px rgba(0, 0, 0, 0.2)'
  }
};
