
import { ThemeProvider } from 'styled-components';
import Groups from '../screens/Groups';

import theme from '../theme'; 

export default function TabOneScreen() {
  return (
    <ThemeProvider theme={theme}>
      <Groups/>
    </ThemeProvider>
  );
}

