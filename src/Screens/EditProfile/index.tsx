import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import ImagePath from '../../Utilities/Constants/ImagePath';
import styles from './style';
import commonStyles from '../../Utilities/Styles/commonStyles';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import {Colors} from '../../Utilities/Styles/colors';
import {CommonBtn, SizeBox} from '../../Utilities/Component/hooks/Helpers';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';

const EditProfile = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={ImagePath.Cartoon}
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
            <TouchableOpacity activeOpacity={0.8} style={styles.updateimgbtn}>
              <VectorIcon
                groupName="Feather"
                name="edit"
                size={20}
                color={Colors.black}
              />
              <Text style={{...commonStyles.font12Regular, marginLeft: 8}}>
                Update Image
              </Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.editedprofilecon}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <SizeBox size={2} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter full name"
              placeholderTextColor={Colors.greyTxt}
            />
            <SizeBox size={5} />
            <Text style={styles.inputLabel}>Email Address </Text>
            <SizeBox size={2} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter email or phone number"
              placeholderTextColor={Colors.greyTxt}
            />
            <SizeBox size={5} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 30,
              }}>
              <View style={{width: '50%'}}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <SizeBox size={2} />
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      width: 156,
                    },
                  ]}
                  placeholder="Enter phone number"
                  keyboardType="name-phone-pad"
                  placeholderTextColor={Colors.greyTxt}
                />
              </View>
              <View style={{width: '50%', marginLeft: 20}}>
                <Text style={styles.inputLabel}>Country</Text>
                <SizeBox size={2} />
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      width: 151,
                    },
                  ]}
                  placeholder="Country name"
                  keyboardType="name-phone-pad"
                  placeholderTextColor={Colors.greyTxt}
                />
              </View>
            </View>
            <SizeBox size={5} />
            <Text style={styles.inputLabel}>Password</Text>
            <SizeBox size={2} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              secureTextEntry
              placeholderTextColor={Colors.greyTxt}
            />
            <SizeBox size={45} />
            <CommonBtn
              onPress={() => navigation.navigate(NavigationStrings.LoginScreen)}
              title={'Save Details'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
