import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {CommonBtn, SizeBox} from '../../Utilities/Component/hooks/Helpers';
import styles from './style';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../../Utilities/Styles/colors';
import {height} from '../../Utilities/Styles/responsiveSize';

const LoginScreen = ({navigation}: any) => {
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          resetScrollToCoords={{x: 0, y: 0}} // Reset scroll when keyboard appears
        >
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

            <View style={styles.loginContainer}>
              <SizeBox size={5} />
              <Image
                source={ImagePath.Evolution}
                style={styles.evolutionImage}
              />
              <Text style={styles.title}>Login</Text>
              <Text style={styles.subtitle}>
                Enter your credentials to log in.
              </Text>
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

              {/* Password Input */}
              <Text style={styles.inputLabel}>Password</Text>
              <SizeBox size={2} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter password"
                secureTextEntry
                placeholderTextColor={Colors.greyTxt}
              />
              <SizeBox size={10} />

              {/* Keep Me Logged In and Forgot Password */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.keepLoggedInContainer}>
                  <TouchableOpacity
                    onPress={() => setKeepMeLoggedIn(!keepMeLoggedIn)}
                    activeOpacity={0.7}>
                    <View
                      style={[
                        styles.checkBox,
                        keepMeLoggedIn && styles.checkedBox,
                      ]}
                    />
                  </TouchableOpacity>
                  <Text style={styles.keepLoggedInText}>Keep me logged in</Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate(NavigationStrings.ForgotPassword)
                  }>
                  <Text style={styles.forgotPasswordText}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </View>

              <SizeBox size={10} />

              {/* Login Button */}
              <CommonBtn
                onPress={() => {
                  navigation.navigate(NavigationStrings.TabRoutes);
                }}
                title={'Login'}
              />

              <SizeBox size={5} />

              {/* Create Account Link */}
              <Text style={[styles.subtitle, {textAlign: 'center'}]}>
                Don’t have an account?{' '}
                <Text
                  style={styles.createtxt}
                  onPress={() =>
                    navigation.navigate(NavigationStrings.RegisterScreen)
                  }>
                  Create one.
                </Text>
              </Text>
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
