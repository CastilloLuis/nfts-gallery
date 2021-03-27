import React from 'react';
import { ThemeProvider } from 'styled-components';

const styleTheme = {
  colors: {
    primary: '#080C11',
    white: '#FFF',
    black: '#000',
    gray1: '#AAB8C1',
    gray2: 'rgb(53, 56, 64)'
  },
  fonts: {
    light: 'font-weight: 300;',
    regular: 'font-weight: 400;',
    bold: 'font-weight: 500;',
  },
};

interface ThemeProps {};

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={styleTheme}>{children}</ThemeProvider>
);

export default Theme;
