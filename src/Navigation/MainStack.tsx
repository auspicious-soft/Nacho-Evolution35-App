import 'react-native-gesture-handler';
import React from 'react';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import * as screens from './index';
import TabRoutes from './TabRoutes';
export default function MainStack(Stack: any) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings?.TabRoutes}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings?.EditProfile}
        component={screens?.EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings?.MyBookings}
        component={screens?.MyBookings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings?.Support}
        component={screens?.Support}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings?.PrivacyPolicy}
        component={screens?.PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings?.BookingSummary}
        component={screens?.BookingSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings?.Cart}
        component={screens?.Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationStrings?.PackageDetail}
        component={screens?.PackageDetail}
        options={{headerShown: false}}
      />
    </>
  );
}
