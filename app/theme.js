// example theme.js

export default {
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  colors: {
    primary: 'royalblue',
    secondary: 'teal',
    text: 'white',
  },
  fontSize: {
    xl: '10rem',
    lg: '1.8rem',
    md: '1.3rem',
    sm: '1rem',
    xs: '0.75rem',
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: 'grey',
      padding: '1rem',
    },
    outline: {
      color: 'blue',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
};
