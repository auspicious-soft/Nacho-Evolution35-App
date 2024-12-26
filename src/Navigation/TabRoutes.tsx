import React, {useContext} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import * as screens from './index';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../Utilities/Styles/responsiveSize';
import {Colors} from '../Utilities/Styles/colors';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import VectorIcon from '../Utilities/Component/vectorIcons';
import ImagePath from '../Utilities/Constants/ImagePath';
import fontFamily from '../Utilities/Styles/fontFamily';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <View
            style={{
              marginBottom: 20,
              paddingHorizontal: 15,
            }}>
            <BottomTabBar style={styles.bottomStyle} {...tabsProps} />
          </View>
        </>
      )}
      initialRouteName={NavigationStrings?.HomeScreen}
      screenOptions={{
        tabBarActiveTintColor: Colors.tranparent,
        tabBarInactiveTintColor: Colors.tranparent,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Colors.navyblue,
          alignSelf: 'center',
          height: 70,
          borderRadius: 38,
          width: width / 1.1,
          alignItems: 'center',
          marginHorizontal: 20,
          bottom: Platform.OS === 'android' ? 8 : 30,
        },
        headerShown: false,
      }}>
      <BottomTab.Screen
        name={NavigationStrings?.HomeScreen}
        component={screens.HomeScreen}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.tabcontainer,
                  {
                    backgroundColor: focused
                      ? Colors.primaryblue
                      : Colors.navyblue,
                  },
                ]}>
                <Image
                  source={ImagePath.Home}
                  style={{
                    height: moderateScaleVertical(26),
                    width: moderateScale(26),
                    tintColor: Colors.white,
                  }}
                />
                <Text style={styles.tabtext}>Home</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings?.Explore}
        component={screens.Explore}
        options={{
          tabBarShowLabel: true,

          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.tabcontainer,
                  {
                    backgroundColor: focused
                      ? Colors.primaryblue
                      : Colors.navyblue,
                  },
                ]}>
                <VectorIcon
                  groupName="MaterialIcons"
                  name="explore"
                  size={27}
                  color={Colors.white}
                />
                <Text style={styles.tabtext}>Explore</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.Feed}
        component={screens.Feed}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.tabcontainer,
                  {
                    backgroundColor: focused
                      ? Colors.primaryblue
                      : Colors.navyblue,
                  },
                ]}>
                <Image
                  source={ImagePath.Feed}
                  style={{
                    height: moderateScaleVertical(26),
                    width: moderateScale(26),
                    tintColor: Colors.white,
                  }}
                />
                <Text style={styles.tabtext}>Feed</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.Wishlist}
        component={screens.Wishlist}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.tabcontainer,
                  {
                    backgroundColor: focused
                      ? Colors.primaryblue
                      : Colors.navyblue,
                  },
                ]}>
                <VectorIcon
                  groupName="AntDesign"
                  name="hearto"
                  size={27}
                  color={Colors.white}
                />
                <Text style={styles.tabtext}>Wishlist</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.Profile}
        component={screens.Profile}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.tabcontainer,
                  {
                    backgroundColor: focused
                      ? Colors.primaryblue
                      : Colors.navyblue,
                  },
                ]}>
                <Image
                  source={ImagePath.Profile}
                  style={{
                    height: moderateScaleVertical(26),
                    width: moderateScale(26),
                    tintColor: Colors.white,
                  }}
                />
                <Text style={styles.tabtext}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    paddingTop: moderateScaleVertical(15),
    backgroundColor: Colors.navyblue,
    borderRadius: 60,
    shadowColor: Colors.tranparent,
  },

  bottomStyle: {
    height: moderateScaleVertical(70),
  },
  tabtext: {
    fontSize: 8,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 2,
  },
  tabcontainer: {
    width: moderateScaleVertical(50),
    height: moderateScale(50),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 29,
  },
});

export default TabRoutes;
