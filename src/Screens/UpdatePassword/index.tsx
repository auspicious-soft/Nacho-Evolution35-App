import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import ImagePath from '../../Utilities/Constants/ImagePath'
import { CommonBtn, SizeBox } from '../../Utilities/Component/hooks/Helpers'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './style'
import { Colors } from '../../Utilities/Styles/colors'
import NavigationStrings from '../../Utilities/Constants/NavigationStrings'

const UpdatePassword = ({navigation}:any) => {
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:Colors.white}}>
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={ImagePath.Onboardingtwo} style={styles.imageBackground}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{position: "absolute", top: 10, left: 10}} activeOpacity={0.7}>
          <Image source={ImagePath.backClick} style={{width: 40, height: 40}}/>
        </TouchableOpacity>

        <View style={styles.UpdateContainer}>
          <SizeBox size={5} />
          <Image source={ImagePath.Evolution} style={styles.evolutionImage} />
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>Fill in your details to register.</Text>
          <SizeBox size={5} />

          {/* Password Input */}
          <Text style={styles.inputLabel}>Password</Text>
          <SizeBox size={2} />
          <TextInput style={styles.textInput} placeholder="Enter password" secureTextEntry placeholderTextColor={Colors.greyTxt} />
          <SizeBox size={3} />

          {/* Confirm Password Input */}
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <SizeBox size={2} />
          <TextInput style={styles.textInput} placeholder="Confirm password" secureTextEntry placeholderTextColor={Colors.greyTxt} />
          <SizeBox size={25} />
          <CommonBtn onPress={() => navigation.navigate(NavigationStrings.LoginScreen)} title={'Update Password'} />
          </View>
      </ImageBackground>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default UpdatePassword