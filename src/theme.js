import { createTheme } from '@mui/material/styles';
import * as colors from '@mui/material/colors';
import '@fontsource/ibm-plex-serif/400.css';
import '@fontsource/ibm-plex-serif/500.css';
import '@fontsource/ibm-plex-serif/600.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

const fontInter = ['Inter', 'sans-serif'].join(',');
const fontIBM = ['IBM Plex Serif', 'sans- serif'].join(', ');

const theme = createTheme({
  typography: {
    fontFamily: fontInter,
    h1: {
      fontFamily: fontIBM,
      fontWeight: 600,
    },
    h2: {
      fontFamily: fontIBM,
      fontWeight: 500,
    },
    h3: {
      fontFamily: fontIBM,
      fontWeight: 400,
    },
    h4: {
      fontFamily: fontInter,
      fontWeight: 600,
    },
    h5: {
      fontFamily: fontInter,
      fontWeight: 500,
    },
    h6: {
      fontFamily: fontInter,
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: '#292929',
    },
    highlight: {
      main: '#4f4789',
    },
    roleski: {
      primary: '#e4121b',
      secondary: '#ffcc00',
    },
    background: {
      default: '#ebebeb',
    },
  },
});

export default theme;
