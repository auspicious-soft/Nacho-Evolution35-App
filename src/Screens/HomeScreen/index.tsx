import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './style';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {
  height,
  moderateScale,
  moderateScaleVertical,
} from '../../Utilities/Styles/responsiveSize';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';
import commonStyles from '../../Utilities/Styles/commonStyles';

const data = [
  {id: '1', title: '3 days, 2 nights'},
  {id: '2', title: '5 days, 4 nights'},
  {id: '3', title: '7 days, 6 nights'},
];

const DATA = [
  {id: '1', title: 'Paris Travel Tour 292', duration: '4 days/ 3 nights'},
  {id: '2', title: 'Rome Adventure 101', duration: '3 days/ 2 nights'},
  {id: '3', title: 'London Explorer 123', duration: '5 days/ 4 nights'},
];

const HomeScreen = ({navigation}: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filters, setFilters] = useState(data);
  const refRBSheet: any = useRef();

  const [selItem, setSelItem] = useState('');
  // State to store multiple selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  const buttons = ['Flight & Land Packages', 'Land Packages'];

  const renderItem = ({item}: any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          source={ImagePath.Cross}
          style={{
            height: 16,
            width: 16,
            borderRadius: 50,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );

  const renderTourList = ({item}: any) => (
    <TouchableOpacity
      style={styles.outerview}
      onPress={() => navigation.navigate('PackageDetail')}
      activeOpacity={0.8}>
      <ImageBackground
        source={ImagePath.City}
        style={{
          height: height / 4,
          width: '100%',
        }}
        borderRadius={5}>
        <View style={styles.tabcontainer}>
          <VectorIcon
            groupName="AntDesign"
            name="heart"
            size={16}
            color={Colors.primaryblue}
          />
        </View>
      </ImageBackground>
      <SizeBox size={5} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.traveltxt}>{item.title}</Text>
          <Text style={styles.daytxt}>{item.duration}</Text>
        </View>
        <TouchableOpacity
          style={styles.arrowcon}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('PackageDetail')}>
          <VectorIcon
            groupName="AntDesign"
            name="arrowright"
            size={26}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const handleOptionSelect = option => {
    // Check if the option is already selected
    if (selectedOptions.includes(option)) {
      // If it is, remove it from the array
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      // If it's not, add it to the array
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.txtimgcon}>
        <View>
          <Text style={styles.username}>Hello Neil!</Text>
          <Text style={styles.welcometxt}>Welcome to Evolution365</Text>
        </View>
        <Image
          source={ImagePath.Onboarding}
          style={{
            height: moderateScaleVertical(41),
            width: moderateScale(41),
            borderRadius: 50,
          }}
        />
      </View>
      <SizeBox size={10} />
      <View style={styles.searchcon}>
        <VectorIcon
          groupName="AntDesign"
          name="search1"
          size={20}
          color={Colors.black}
        />
        <TextInput
          placeholder="Search Your Destination"
          placeholderTextColor={Colors.black}
          style={styles.input}
        />
        <View style={styles.separator} />
        <TouchableOpacity
          style={styles.filterIconContainer}
          activeOpacity={0.8}
          onPress={() => refRBSheet.current.open()} // Open RB Sheet on press
        >
          <Image
            source={ImagePath.Filter}
            style={{
              height: moderateScaleVertical(16),
              width: moderateScale(16),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <SizeBox size={10} />
      <View style={styles.buttonscon}>
        {buttons.map((title, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeIndex === index ? Colors.primaryblue : 'transparent',
                shadowColor:
                  activeIndex === index ? Colors.primaryblue : 'transparent',
              },
            ]}
            onPress={() => setActiveIndex(index)}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: activeIndex === index ? Colors.white : Colors.black,
                },
              ]}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <SizeBox size={10} />
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.title, {marginLeft: 20}]}>Filters</Text>
        <FlatList
          data={filters}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <SizeBox size={10} />
      <FlatList
        data={DATA}
        renderItem={renderTourList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <SizeBox size={40} />}
      />
      <SizeBox size={25} />
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

      <RBSheet
        ref={refRBSheet}
        height={500}
        openDuration={300}
        customStyles={{
          container: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            padding: 0,
            backgroundColor: Colors.white,
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              ...commonStyles.font12Regular,
              color: Colors.secondaryfont,
            }}>
            All Filters
          </Text>

          <Text
            onPress={() => setSelectedOptions([])}
            style={{...commonStyles.font12, color: Colors.primaryblue}}>
            Clear All Filters
          </Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: '30%'}}>
            {[
              'Country',
              'Durations',
              'Group Tour Date',
              'Year',
              'Special Events',
              'Self-Drive',
            ].map(item => (
              <TouchableOpacity
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  backgroundColor:
                    selItem === item ? Colors.white : Colors.rbsheetback,
                  borderBottomWidth: 0.5,
                  borderColor: Colors.gentlegrey,
                }}
                onPress={() => {
                  console.log(item);
                  setSelItem(item);
                }}>
                <Text
                  style={{
                    ...commonStyles.font12Regualar2,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{width: '70%'}}>
            {[
              '3 days, 2 Nights',
              '4 days, 3 Nights',
              '5 days, 4 Nights',
              '6 days, 5 Nights',
              '7 days, 6 Nights',
              '8 days, 7 Nights',
              '9 days, 8 Nights',
              '10 days, 9 Nights',
            ].map((option, index) => (
              <TouchableOpacity
                key={index}
                //
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.rbsheetback,
                }}
                onPress={() => handleOptionSelect(option)}>
                <VectorIcon
                  groupName="AntDesign"
                  name="check"
                  size={20}
                  style={{marginLeft: 10}}
                  color={
                    selectedOptions.includes(option)
                      ? Colors.primaryblue
                      : Colors.lightGrey
                  }
                />
                <Text
                  style={{
                    ...commonStyles.font12Regualar2,
                    paddingLeft: 10,
                    color: selectedOptions.includes(option)
                      ? Colors.primaryblue
                      : Colors.lightGrey,
                  }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: Colors.lightGrey,
          }}>
          <TouchableOpacity
            onPress={() => refRBSheet.current.close()}
            style={{
              flex: 1,
              backgroundColor: Colors.secondaryfont,
              paddingVertical: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.filtertxt}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheet.current.close()}
            style={{
              flex: 1,
              backgroundColor: Colors.primaryblue,
              paddingVertical: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.filtertxt}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default HomeScreen;
