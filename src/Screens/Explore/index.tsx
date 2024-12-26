import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ScrollView,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import {Colors} from '../../Utilities/Styles/colors';
import ImagePath from '../../Utilities/Constants/ImagePath';
import styles from './styles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../Utilities/Styles/responsiveSize';
import RBSheet from 'react-native-raw-bottom-sheet';
import commonStyles from '../../Utilities/Styles/commonStyles';

const {height, width} = Dimensions.get('window');

const ITEM_WIDTH = width * 0.7;
const SPACING = 20;

const DATA = [
  {
    id: '1',
    title: '4 days 3 nights',
    image: ImagePath.City,
  },
  {
    id: '2',
    title: '3 days 2 nights',
    image: ImagePath.Onboarding,
  },
  {
    id: '3',
    title: '5 days 4 nights',
    image: ImagePath.Cartoon,
  },
];

const data = [
  {
    id: '1',
    title: 'Paris Travel Tour 292',
    subtitle: '40% Discount',
    duration: '4 days/ 3 nights',
  },
  {
    id: '2',
    title: 'Rome Adventure 101',
    subtitle: '40% Discount',
    duration: '3 days/ 2 nights',
  },
  {
    id: '3',
    title: 'London Explorer 123',
    subtitle: '40% Discount',
    duration: '5 days/ 4 nights',
  },
  {
    id: '4', // Fixed duplicate id
    title: 'Japan Travel Tour 282',
    subtitle: '40% Discount',
    duration: '5 days/ 4 nights',
  },
];

const Explore = ({navigation}: any) => {
  const translateX = useSharedValue(0);
  const refRBSheet: any = useRef();
  const [selItem, setSelItem] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const renderTourList = ({item}: any) => (
    <TouchableOpacity
      style={styles.outerview}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('PackageDetail')}>
      <ImageBackground
        source={ImagePath.Cartoon}
        style={{
          height: height / 4,
          width: '100%',
        }}
        borderRadius={5}>
        <View style={styles.daytxt}>
          <Text style={styles.title}>{item.subtitle}</Text>
        </View>
        <View style={styles.vectorcon}>
          <VectorIcon
            groupName="AntDesign"
            name="hearto"
            size={16}
            color={Colors.black}
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
          <Text style={styles.durationtxt}>{item.duration}</Text>
        </View>
        <TouchableOpacity
          style={styles.arrowcon}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('PackageDetail')}>
          <VectorIcon
            groupName="AntDesign"
            name="arrowright"
            size={25}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  const handleOptionSelect = (option: string) => {
    setSelectedOptions(prevSelectedOptions => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter(item => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const CarouselItem = ({item, index}: any) => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    const animatedImageStyle = useAnimatedStyle(() => {
      const translateXImage = interpolate(
        translateX.value,
        inputRange,
        [-100, 0, 100],
        Extrapolate.CLAMP,
      );
      return {
        transform: [{translateX: translateXImage}],
      };
    });

    const animatedCardStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        translateX.value,
        inputRange,
        [0.85, 1, 0.85],
        Extrapolate.CLAMP,
      );

      const zIndex = index === 1 ? 2 : 0;

      return {
        transform: [{scale}],
        zIndex,
        elevation: zIndex,
      };
    });

    return (
      <View
        style={{
          width: width / 1.3,
          height: moderateScale(423),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View style={[styles.card, animatedCardStyle]}>
          <Animated.Image
            source={item.image}
            style={[styles.image, animatedImageStyle]}
            resizeMode="cover"
          />
          <View style={styles.daytxt}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.tabcontainer}>
            <VectorIcon
              groupName="AntDesign"
              name="heart"
              size={14}
              color={Colors.black}
            />
          </View>
          <View style={styles.overlay}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details</Text>
              <VectorIcon
                groupName="AntDesign"
                name="arrowright"
                size={15}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingVertical: 10}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.username}>Explore</Text>
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
            onPress={() => refRBSheet.current.open()}>
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
        <Text style={[styles.username, {fontSize: 18}]}>
          Our Most Bought Packages
        </Text>
        <SizeBox size={10} />
        <View>
          <Animated.ScrollView
            horizontal
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: SPACING,
              paddingTop: 10,
            }}>
            {DATA.map((item, index) => (
              <CarouselItem key={item.id} item={item} index={index} />
            ))}
          </Animated.ScrollView>
        </View>
        <SizeBox size={20} />
        <ImageBackground
          source={ImagePath.Blueback}
          resizeMode="stretch"
          style={{
            height: moderateScale(236),
            width: '100%',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              height: '100%',
            }}>
            <Text style={styles.preferencetxt}>
              Want To Travel According To Your Preferences
            </Text>
            <SizeBox size={10} />
            <Text style={styles.promtxt}>
              We provide a range of exclusive promotions and discounts to make
              your trip more affordable.
            </Text>
            <SizeBox size={20} />
            <TouchableOpacity style={styles.tripplan} activeOpacity={0.8}>
              <Text style={styles.promtxt}>Plan Your Own Trip</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <SizeBox size={20} />
        <View style={styles.promotionalcon}>
          <Text style={[styles.preferencetxt, {color: Colors.navyblue}]}>
            Promotional Tours
          </Text>
          <TouchableOpacity
            style={styles.filterIconContainer}
            activeOpacity={0.8}
            onPress={() => refRBSheet.current.open()}>
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
        <FlatList
          data={data}
          renderItem={renderTourList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <SizeBox size={65} />}
        />
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
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.rbsheetback,
                  width: '90%',
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

export default Explore;
