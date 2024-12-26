import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ImagePath from '../../Utilities/Constants/ImagePath';
import { CommonBtn, SizeBox } from '../../Utilities/Component/hooks/Helpers';
import styles from './style';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../Utilities/Styles/colors';

const ForgotPassword = ({navigation}:any) => {
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:Colors.white}}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
    <ImageBackground source={ImagePath.Onboardingtwo} style={styles.imageBackground}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{position:"absolute", top:10, left:10}} activeOpacity={0.7}>
      <Image source={ImagePath.backClick} style={{width:40,height:40}}/>
      </TouchableOpacity>

      <View style={styles.forgotContainer}>
        <SizeBox size={5} />
        <Image source={ImagePath.Evolution} style={styles.evolutionImage} />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>Fill in your details to reset password.</Text>
        <SizeBox size={10} />
        <Text style={styles.inputLabel}>Email or Phone</Text>
        <SizeBox size={2} />
        <TextInput style={styles.textInput} placeholder="Enter email or phone number" placeholderTextColor={Colors.greyTxt} />
   
        <SizeBox size={20} />
        <CommonBtn onPress={()=>{navigation.navigate(NavigationStrings.OtpScreen)}} title={'Confirm'} />
        <SizeBox size={5} />

        <Text style={[styles.subtitle,{textAlign:"center"}]}>Remember Password? <Text style={styles.createtxt} onPress={()=>navigation.navigate(NavigationStrings.LoginScreen)}>Login</Text></Text>
      </View>
    </ImageBackground>
    </KeyboardAwareScrollView>
  </SafeAreaView>
  )
}

export default ForgotPassword