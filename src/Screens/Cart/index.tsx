import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import React from 'react';
import ImagePath from '../../Utilities/Constants/ImagePath';
import commonStyles from '../../Utilities/Styles/commonStyles';
import styles from './style';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import {Colors} from '../../Utilities/Styles/colors';
import {width} from '../../Utilities/Styles/responsiveSize';

const Cart = ({navigation}: any) => {
  const cartData = [
    {
      id: '1',
      title: 'HEAD Radical Elite.....',
      price: '₹6250.00',
      date: '21 Dec 2024 - 24 Dec 2024',
      roomOccupancy: 'Per Person (8 People)',
      room: 'Double Occupancy',
      total: '$2,895.00',
    },
    {
      id: '2',
      title: 'HEAD Radical Elite.....',
      price: '₹6250.00',
      date: '21 Dec 2024 - 24 Dec 2024',
      roomOccupancy: 'Per Person (8 People)',
      room: 'Double Occupancy',
      total: '$2,895.00',
    },
    {
      id: '3',
      title: 'HEAD Radical Elite.....',
      price: '₹6250.00',
      date: '21 Dec 2024 - 24 Dec 2024',
      roomOccupancy: 'Per Person (8 People)',
      room: 'Double Occupancy',
      total: '$2,895.00',
    },
    {
      id: '4',
      title: 'HEAD Radical Elite.....',
      price: '₹6250.00',
      date: '21 Dec 2024 - 24 Dec 2024',
      roomOccupancy: 'Per Person (8 People)',
      room: 'Double Occupancy',
      total: '$2,895.00',
    },
  ];

  const renderItem = ({item}: any) => (
    <View style={styles.outercon}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={ImagePath.Cartoon}
            style={{width: 58, height: 58, borderRadius: 5}}
          />
          <View style={{paddingHorizontal: 15}}>
            <Text
              numberOfLines={1}
              style={{...commonStyles.font14Regular, width: width / 3}}>
              {item.title}
            </Text>
            <Text style={{...commonStyles.font12}}>{item.price}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity activeOpacity={0.8}>
            <VectorIcon
              groupName="Feather"
              name="minus-circle"
              size={20}
              color={Colors.primaryblue}
            />
          </TouchableOpacity>
          <Text style={styles.quentitytxt}>2</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <VectorIcon
              groupName="Feather"
              name="plus-circle"
              size={20}
              color={Colors.primaryblue}
            />
          </TouchableOpacity>
        </View>
      </View>
      <SizeBox size={5} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{...commonStyles.font12}}>Group Tour Date:</Text>
        <Text style={{...commonStyles.font12Bold}}>{item.date}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Text style={{...commonStyles.font12}}>Room Occupancy</Text>
        <Text style={{...commonStyles.font12Bold}}>{item.roomOccupancy}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{...commonStyles.font12}}>Room</Text>
        <Text style={{...commonStyles.font12Bold}}>{item.room}</Text>
      </View>
      <SizeBox size={5} />
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: Colors.gentlegrey,
        }}
      />
      <SizeBox size={5} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{...commonStyles.font12}}>Total</Text>
        <Text style={{...commonStyles.font14}}>{item.total}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Platform.OS == 'android' ? 20 : 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}>
            <Image
              source={ImagePath.backClick}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...commonStyles.font20navy,
              marginLeft: 20,
            }}>
            Cart
          </Text>
        </View>
        <SizeBox size={10} />
        <View>
          <FlatList
            data={cartData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={() => <SizeBox size={40} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <View>
          <Text style={{...commonStyles.font12Regualar2, fontStyle: 'italic'}}>
            Total Amount{' '}
          </Text>
          <Text style={{...commonStyles.font16White}}>$2458.00</Text>
        </View>
        <TouchableOpacity style={styles.booknowbtn}>
          <Text style={{...commonStyles.font14Center}}>Book now</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
