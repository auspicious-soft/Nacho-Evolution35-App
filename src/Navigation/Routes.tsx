import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {navigationRef} from './RootNavigation';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import * as screens from './index';
const Stack = createNativeStackNavigator();

export default function Routes() {
  // const user = useSelector((data: any) => data?.auth?.userData);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{animation: 'ios_from_right'}}>
        {AuthStack(Stack)}
        {MainStack(Stack)}

        {/* <Stack.Screen
          name={NavigationStrings.HomeScreen}
          component={screens.HomeScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
