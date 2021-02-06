import { Theme } from './symbols';

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--theme-background': 'hsl(207, 26%, 17%)',
    '--theme-elements': 'hsl(209, 23%, 22%)',
    '--theme-text': 'hsl(0, 0%, 100%)',
    '--theme-input': 'hsl(0, 0%, 52%)',
    '--theme-box-shadow': '0 0 5px rgba(0, 0, 0, 0.05)',
    '--theme-box-shadow-hov': '0 0 30px rgba(0, 0, 0, 0.15)',
    '--theme-box-shadow-large': '0 0 5px rgba(0, 0, 0, 0.2)'
  }
} 