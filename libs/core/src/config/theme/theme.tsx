import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
export const theme = createTheme({
palette: {
   primary: {
      main: '#456AF2',
      //#456AF2
   },
   secondary: {
     main: '#19857b',
   },
   error: {
   main: red.A400,
   },

  },
});
export default theme;