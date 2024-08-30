
import { ThemeProvider } from 'styled-components';
import Groups from '../screens/Groups';

import theme from '../theme'; 
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Loading } from '../components/Loading';

export default function TabOneScreen() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})


  return (
    <ThemeProvider theme={theme}>
      <StatusBar 

        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Groups/> : <Loading/>}
    </ThemeProvider>
  );
}

