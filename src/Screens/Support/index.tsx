import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import ImagePath from '../../Utilities/Constants/ImagePath';
import commonStyles from '../../Utilities/Styles/commonStyles';
import styles from './style';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';

const Support = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginTop: Platform.OS == 'android' ? 20 : 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}>
          <Image source={ImagePath.backClick} style={{width: 40, height: 40}} />
        </TouchableOpacity>
        <Text
          style={{
            ...commonStyles.font20navy,
            marginLeft: 20,
          }}>
          Support
        </Text>
      </View>
      <SizeBox size={10} />
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
    </SafeAreaView>
  );
};

export default Support;
