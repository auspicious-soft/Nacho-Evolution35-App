import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ImagePath from '../../Utilities/Constants/ImagePath';
import styles from './style';
import {CommonBtn, SizeBox} from '../../Utilities/Component/hooks/Helpers';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../../Utilities/Styles/colors';

const RegisterScreen = ({navigation}: any) => {
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={ImagePath.Onboardingtwo}
          style={styles.imageBackground}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', top: 10, left: 10}}
            activeOpacity={0.7}>
            <Image
              source={ImagePath.backClick}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>

          <View style={styles.RegisterContainer}>
            <SizeBox size={5} />
            <Image source={ImagePath.Evolution} style={styles.evolutionImage} />
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subtitle}>
              Fill in your details to register.
            </Text>
            <SizeBox size={5} />

            {/* Full Name Input */}
            <Text style={styles.inputLabel}>Full Name</Text>
            <SizeBox size={2} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter full name"
              placeholderTextColor={Colors.greyTxt}
            />
            <SizeBox size={5} />

            {/* Email or Phone Input */}
            <Text style={styles.inputLabel}>Email or Phone</Text>
            <SizeBox size={2} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter email or phone number"
              placeholderTextColor={Colors.greyTxt}
            />
            <SizeBox size={5} />

            {/* Phone Number Input */}
            <Text style={styles.inputLabel}>Phone Number</Text>
            <SizeBox size={2} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter phone number"
              keyboardType="name-phone-pad"
              placeholderTextColor={Colors.greyTxt}
            />
            <SizeBox size={5} />

            {/* Password Input */}
            <Text style={styles.inputLabel}>Password</Text>
            <SizeBox size={2} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              secureTextEntry
              placeholderTextColor={Colors.greyTxt}
            />
            <SizeBox size={2} />

            {/* Confirm Password Input */}
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <SizeBox size={2} />
            <TextInput
              style={styles.textInput}
              placeholder="Confirm password"
              secureTextEntry
              placeholderTextColor={Colors.greyTxt}
            />
            <SizeBox size={10} />
            <CommonBtn
              onPress={() => {
                console.log('ok');
              }}
              title={'Sign Up'}
            />
            <SizeBox size={2} />

            <Text style={[styles.subtitle, {textAlign: 'center'}]}>
              Already have an account?
              <Text
                style={styles.createtxt}
                onPress={() =>
                  navigation.navigate(NavigationStrings.LoginScreen)
                }>
                {' '}
                Login
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
