import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ImagePath from '../../Utilities/Constants/ImagePath';
import { CommonBtn, SizeBox } from '../../Utilities/Component/hooks/Helpers';
import styles from './style';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../Utilities/Styles/colors';
import { OtpInput } from 'react-native-otp-entry';

const OtpScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:Colors.white}}>
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
<ImageBackground source={ImagePath.Onboardingtwo} style={styles.imageBackground}>

  <TouchableOpacity onPress={() => navigation.goBack()} style={{position:"absolute", top:10, left:10}} activeOpacity={0.7}>
  <Image source={ImagePath.backClick} style={{width:40,height:40}}/>
  </TouchableOpacity>

  <View style={styles.otpContainer}>
    <SizeBox size={5} />
    <Image source={ImagePath.Evolution} style={styles.evolutionImage} />
    <Text style={styles.title}>Enter OTP</Text>
    <Text style={styles.subtitle}>Please enter the OTP you’ve recieved.</Text>
    <SizeBox size={5} />
    <View>
    <OtpInput 
     focusColor={Colors.primaryblue}
    numberOfDigits={6} 
    onTextChange={(text) => console.log(text)}  
     theme={{
    pinCodeContainerStyle: styles.pinCodeContainer,
  }} />
    </View>
    <SizeBox size={20} />
    <CommonBtn onPress={()=>{navigation.navigate(NavigationStrings.UpdatePassword)}}title={'Confirm'} />
    <SizeBox size={5} />
    <Text style={[styles.subtitle,{textAlign:"center"}]}>Remember Password? <Text style={styles.createtxt} onPress={()=>navigation.navigate(NavigationStrings.LoginScreen)}>Login</Text></Text>
  </View>
</ImageBackground>
</KeyboardAwareScrollView>
</SafeAreaView>
  )
}

export default OtpScreen