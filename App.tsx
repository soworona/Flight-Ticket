/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  Appearance,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ClassInfo from './ClassInfo';
import TicketInfo from './TicketInfo';
import Qr from './Qr';
import { lightTheme, darkTheme } from './themes/theme';
import { useState } from 'react';
import Btn from './Btn';

function App() {
  const systemColorScheme = Appearance.getColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.overlay }]}>
      <Image
        source={
          isDarkMode
            ? require('./assets/night-sky.jpg')
            : require('./assets/pexels-virgold-24974431.jpg')
        }
        style={styles.img}
      />

      <View style={styles.overlayContainer}>
        <View style={styles.flex}>
          <Image source={require('./assets/Logo.png')} style={styles.logo} />
          <View>
            <Text
              style={[{ color: theme.text, fontSize: 18, fontWeight: 400 }]}
            >
              Fri, 27 Jan. 2024
            </Text>
            <Text
              style={[
                {
                  color: theme.text,
                  fontSize: 13,
                  fontWeight: 200,
                  textAlign: 'right',
                },
              ]}
            >
              {isDarkMode ? 'NIGHT FLIGHT' : 'DAY FLIGHT'}{' '}
            </Text>
          </View>
        </View>

        <View style={{ gap: 10 }}>
          <Text style={[{ color: theme.text, fontSize: 24, fontWeight: 600 }]}>
            Julien Simpson
          </Text>
          <ClassInfo theme={theme} />
        </View>
        <Btn onPress={toggleTheme} />
      </View>

      <TicketInfo theme={theme}/>

      <Qr />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: 340,
    resizeMode: 'cover',
  },
  logo: {
    width: 100,
    height: 50,
    bottom: 5,
  },
  overlayContainer: {
    position: 'absolute',
    top: 40,
    paddingHorizontal: 20,
    gap: 20,
  },
  flex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default App;
