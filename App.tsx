import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/Navigation/Routes';
import FlashMessage from 'react-native-flash-message';
import {moderateScale, textScale} from './src/Utilities/Styles/responsiveSize';
import fontFamily from './src/Utilities/Styles/fontFamily';
import {SplashScreen} from './src/Navigation';

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

export default function App() {
  const [first, setfirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setfirst(true);
    }, 2500);
  }, []);

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <SafeAreaProvider>
        {first ? <Routes /> : <SplashScreen />}
        <FlashMessage
          titleStyle={{
            marginRight: moderateScale(5),
            fontFamily: fontFamily.time_regular,
            fontSize: textScale(12),
          }}
          position="top"
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
