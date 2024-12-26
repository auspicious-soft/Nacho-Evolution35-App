import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Utilities/Styles/responsiveSize';
import styles from './styles';
import commonStyles from '../../Utilities/Styles/commonStyles';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import {Colors} from '../../Utilities/Styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={ImagePath.City}
            style={{width: width, height: moderateScale(298)}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('EditProfile')}>
              <Image
                source={ImagePath.Edit}
                style={{
                  height: 33,
                  width: 33,
                  alignSelf: 'flex-end',
                  marginRight: 10,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.profilecon}>
            <Text style={{...commonStyles.font20navy}}>
              Japan Travel Tour 282
            </Text>
            <SizeBox size={5} />
            <View style={styles.countryimgcon}>
              <Image
                source={ImagePath.Onboarding}
                style={{width: 17, height: 17, borderRadius: 20}}
              />
              <Text style={styles.countrytxt}>Japan</Text>
            </View>
            <SizeBox size={7} />
            <View style={styles.datecontainer}>
              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={ImagePath.Call}
                  style={{
                    resizeMode: 'contain',
                    width: 31,
                    height: 30,
                    borderRadius: 15,
                  }}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.phonetxt}>Phone</Text>
                  <SizeBox size={2} />
                  <Text style={{...commonStyles.font12Regular}}>
                    +1 (888) 383-6002{' '}
                  </Text>
                </View>
              </View>
              <SizeBox size={3} />
              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={ImagePath.Mail}
                  style={{
                    resizeMode: 'contain',
                    width: 31,
                    height: 30,
                    borderRadius: 15,
                  }}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.phonetxt}>Email Address</Text>
                  <SizeBox size={1} />
                  <Text style={{...commonStyles.font12Regular}}>
                    melendezniel@dummymail.com
                  </Text>
                </View>
              </View>
              <SizeBox size={3} />

              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={ImagePath.Mail}
                  style={{
                    resizeMode: 'contain',
                    width: 31,
                    height: 30,
                    borderRadius: 15,
                  }}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.phonetxt}>Home Address</Text>
                  <SizeBox size={1} />
                  <View style={{width: '95%'}}>
                    <Text style={{...commonStyles.font12Regular}}>
                      8545 South Redwood Road Suite A-2 West Jordan, UT 84088
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <SizeBox size={10} />
            <View style={styles.outerview}>
              <TouchableOpacity
                style={styles.wrapper}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('MyBookings')}>
                <View style={styles.imageview}>
                  <VectorIcon
                    groupName="Feather"
                    name="calendar"
                    size={16}
                    color={Colors.primaryblue}
                  />
                </View>
                <Text style={styles.bookingtxt}>My Bookings</Text>
              </TouchableOpacity>
              <SizeBox size={5} />
              <View style={styles.bottomline} />
              <SizeBox size={5} />
              <TouchableOpacity style={styles.wrapper} activeOpacity={0.8}>
                <View style={styles.imageview}>
                  <Image
                    source={ImagePath.Preference}
                    style={{
                      height: moderateScaleVertical(16),
                      width: moderateScale(16),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <Text style={styles.bookingtxt}>Preferences</Text>
              </TouchableOpacity>
              <SizeBox size={5} />
              <View style={styles.bottomline} />
              <SizeBox size={5} />
              <TouchableOpacity
                style={styles.wrapper}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Support')}>
                <View style={styles.imageview}>
                  <Image
                    source={ImagePath.Support}
                    style={{
                      height: moderateScaleVertical(16),
                      width: moderateScale(16),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <Text style={styles.bookingtxt}>Support</Text>
              </TouchableOpacity>
            </View>
            <SizeBox size={10} />
            <View style={styles.outerview}>
              <TouchableOpacity style={styles.wrapper} activeOpacity={0.8}>
                <View style={styles.imageview}>
                  <Image
                    source={ImagePath.Policy}
                    style={{
                      height: moderateScaleVertical(16),
                      width: moderateScale(16),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <Text style={styles.bookingtxt}>Cancellation Policy</Text>
              </TouchableOpacity>
              <SizeBox size={5} />
              <View style={styles.bottomline} />
              <SizeBox size={5} />
              <TouchableOpacity
                style={styles.wrapper}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('PrivacyPolicy')}>
                <View style={styles.imageview}>
                  <Image
                    source={ImagePath.Insurance}
                    style={{
                      height: moderateScaleVertical(16),
                      width: moderateScale(16),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <Text style={styles.bookingtxt}>Privacy Policy</Text>
              </TouchableOpacity>
              <SizeBox size={5} />
              <View style={styles.bottomline} />
              <SizeBox size={5} />
              <TouchableOpacity style={styles.wrapper} activeOpacity={0.8}>
                <View style={styles.imageview}>
                  <Image
                    source={ImagePath.Insurance}
                    style={{
                      height: moderateScaleVertical(16),
                      width: moderateScale(16),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <Text style={styles.bookingtxt}>Travel Insurance</Text>
              </TouchableOpacity>
              <SizeBox size={5} />
              <View style={styles.bottomline} />
              <SizeBox size={5} />
              <TouchableOpacity style={styles.wrapper} activeOpacity={0.8}>
                <View style={styles.imageview}>
                  <VectorIcon
                    groupName="MaterialIcons"
                    name="logout"
                    size={16}
                    color={Colors.primaryblue}
                  />
                </View>
                <Text style={styles.bookingtxt}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <SizeBox size={20} />
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: 'absolute',
            bottom: Platform.OS == 'android' ? 90 : 80,
            right: 20,
          }}
          onPress={() => navigation.navigate('Cart')}>
          <Image
            source={ImagePath.Cart}
            resizeMode="contain"
            style={{
              height: 50,
              width: 50,
              bottom: Platform.OS == 'android' ? 2 : 30,
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
