import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {height} from '../../Utilities/Styles/responsiveSize';
import ImagePath from '../../Utilities/Constants/ImagePath';

const SplashScreen = ({}: any) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('OnBoarding');
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image
          source={ImagePath.AppLogo}
          style={{width: '100%', height: height}}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
