import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Utilities/Styles/responsiveSize';
import styles from './style';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';
import commonStyles from '../../Utilities/Styles/commonStyles';
import {Colors} from '../../Utilities/Styles/colors';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import MapView, {Marker} from 'react-native-maps';

const data = [
  {
    id: '1',
    day: 'Day 1',
    title: 'Return flight to USA',
    description:
      'Ensure that you check for any travel restrictions and entry requirements.',
    image: ImagePath.House,
  },
  {
    id: '2',
    day: 'Day 2',
    title: 'City Tour in New York',
    description: 'Visit Times Square, Central Park, and the Statue of Liberty.',
    image: ImagePath.Cartoon,
  },
  {
    id: '3',
    day: 'Day 3',
    title: 'Relaxation Day',
    description: 'Spend the day at the spa and enjoy leisure activities.',
    image: ImagePath.Onboarding,
  },
  {
    id: '4',
    day: 'Day 4',
    title: 'Return flight to USA',
    description: 'Spend the day at the spa and enjoy leisure activities.',
    image: ImagePath.Cartoon,
  },
  {
    id: '5',
    day: 'Day 5',
    title: 'City Tour in New York',
    description: 'Spend the day at the spa and enjoy leisure activities.',
    image: ImagePath.Onboardingone,
  },
  {
    id: '6',
    day: 'Day 6',
    title: 'Relaxation Day',
    description: 'Spend the day at the spa and enjoy leisure activities.',
    image: ImagePath.City,
  },
];

const PackageDetail = ({navigation}: any) => {
  const translateX = useSharedValue(0);
  const [selectedButton, setSelectedButton] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [tourHighlights, setTourHighlights] = useState('');
  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const SPACING = 20;
  const ITEM_WIDTH = width * 0.7;

  const columns = ['Room Occupancy', 'Single', 'Double', 'Triple', 'Quadruple'];
  const rowdata = [
    'Per Person',
    'Not Available',
    '$4485',
    'Not Available',
    'Not Available',
  ];

  const buttons = [
    {key: 'itinerary', label: 'Itinerary at a glance'},
    {key: 'highlights', label: 'Tour highlights'},
    {key: 'Your Tour Includes', label: 'Your Tour Includes'},
  ];
  const days = [
    {id: 1, label: 'Day 1'},
    {id: 2, label: 'Day 2'},
    {id: 3, label: 'Day 3'},
    {id: 4, label: 'Day 4'},
    {id: 5, label: 'Day 5'},
    {id: 6, label: 'Day 6'},
    {id: 7, label: 'Day 7'},
  ];
  const handlePress = id => {
    setSelectedDay(id);
  };

  const renderDaysList = ({item}) => {
    const viewStyle =
      selectedDay === item.id
        ? styles.selectedDayView
        : styles.unselectedDayView;
    const textStyle =
      selectedDay === item.id ? styles.selectedText : styles.unselectedText;

    return (
      <TouchableOpacity onPress={() => handlePress(item.id)} style={viewStyle}>
        <Text style={textStyle}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

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
        <Animated.View
          style={[
            {
              marginHorizontal: 10,
              borderRadius: 20,
              overflow: 'hidden',
              backgroundColor: Colors.white,
              shadowColor: Colors.black,
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            },
            animatedCardStyle,
          ]}>
          <Animated.Image
            source={item.image}
            style={[{flex: 1}, animatedImageStyle]}
            resizeMode="cover"
          />
        </Animated.View>
      </View>
    );
  };

  const renderButton = ({item, index}: any) => (
    <TouchableOpacity
      style={[
        styles.glancebtn,

        {
          backgroundColor:
            selectedButton === item.label ? Colors.navyblue : Colors.white,
        },
      ]}
      onPress={() => {
        setSelectedButton(item.label);
        setTourHighlights(index);
      }}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.btntxt,
          {
            color:
              selectedButton === item.label
                ? Colors.white
                : Colors.secondaryfont,
          },
        ]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={commonStyles.font10Regular}>{item.day}</Text>
        <Text style={commonStyles.font14Bold}>{item.title}</Text>
        <Text style={[commonStyles.font10Bold, styles.description]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, backgroundColor: Colors.white}}>
          <ImageBackground
            source={ImagePath.House}
            style={{width: '100%', height: height / 2.7}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{position: 'absolute', top: 10, left: 10}}
              activeOpacity={0.7}>
              <Image
                source={ImagePath.backClick}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
            <View style={styles.vectorcon}>
              <VectorIcon
                groupName="AntDesign"
                name="hearto"
                size={16}
                color={Colors.black}
              />
            </View>
          </ImageBackground>
          <View>
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
              <SizeBox size={8} />
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={styles.datetxt}>Dates</Text>
                  <SizeBox size={3} />
                  <View style={styles.txtouterview}>
                    <Text style={styles.dates}>24 Dec 2024 - 31 Dec 2024</Text>
                  </View>
                </View>
                <View style={{paddingLeft: 15}}>
                  <Text style={styles.datetxt}>Quantity</Text>
                  <SizeBox size={3} />
                  <View style={styles.txtouterview}>
                    <Text style={styles.dates}>10</Text>
                  </View>
                </View>
              </View>
              <SizeBox size={10} />
              <Text style={styles.placeserveytxt}>
                Explore Japan with our expert local guides! This 18-day,
                17-night tour includes hotel accommodations, some meals, and
                guided activities. With an English/Japanese-speaking guide,
                you'll experience seamless travel and unforgettable adventures.
                Pricing is consistent for departures from any major U.S. city.
                Please note that all schedules are approximate and may vary.
              </Text>
              <SizeBox size={10} />
              <Text style={styles.overviewtxt}>Overview</Text>
              <SizeBox size={5} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={ImagePath.Flight}
                    style={{height: 13, width: 16, resizeMode: 'contain'}}
                  />
                  <Text
                    style={[styles.dates, {fontWeight: '500', marginLeft: 10}]}>
                    Duration
                  </Text>
                </View>
                <Text style={styles.dayphase}>9 Days, 8 Nights</Text>
              </View>
              <SizeBox size={5} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={ImagePath.Flight}
                    style={{height: 13, width: 16, resizeMode: 'contain'}}
                  />
                  <Text
                    style={[styles.dates, {fontWeight: '500', marginLeft: 10}]}>
                    Airfare
                  </Text>
                </View>
                <Text style={styles.dayphase}>Included</Text>
              </View>
              <SizeBox size={5} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={ImagePath.Flight}
                    style={{height: 13, width: 16, resizeMode: 'contain'}}
                  />
                  <Text
                    style={[styles.dates, {fontWeight: '500', marginLeft: 10}]}>
                    Hotels
                  </Text>
                </View>
                <Text style={styles.dayphase}>Included</Text>
              </View>
              <SizeBox size={5} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={ImagePath.Flight}
                    style={{height: 13, width: 16, resizeMode: 'contain'}}
                  />
                  <Text
                    style={[styles.dates, {fontWeight: '500', marginLeft: 10}]}>
                    Local Guide
                  </Text>
                </View>
                <Text style={styles.dayphase}>
                  English / Japanese Guide Included
                </Text>
              </View>
              <SizeBox size={5} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={ImagePath.Flight}
                    style={{height: 13, width: 16, resizeMode: 'contain'}}
                  />
                  <Text
                    style={[styles.dates, {fontWeight: '500', marginLeft: 10}]}>
                    Activities
                  </Text>
                </View>
                <Text style={styles.dayphase}>Included</Text>
              </View>
              <SizeBox size={5} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={ImagePath.Flight}
                    style={{height: 13, width: 16, resizeMode: 'contain'}}
                  />
                  <Text
                    style={[styles.dates, {fontWeight: '500', marginLeft: 10}]}>
                    Meals
                  </Text>
                </View>
                <Text style={styles.dayphase}>Some Meals Included</Text>
              </View>
              <SizeBox size={20} />
              <View style={styles.restrictionview}>
                <Text style={styles.restrictiontxt}>
                  Ensure that you check for any travel restrictions and entry
                  requirements at your destination. It is your responsibility to
                  be prepared with all necessary travel documents and paperwork.
                  Plan to arrive at the airport at least three hours before your
                  scheduled departure time.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <SizeBox size={10} />
        <View style={{paddingHorizontal: 25}}>
          <Text style={{...commonStyles.font14Bold}}>
            9 days and 8 Nights in England
          </Text>
          <SizeBox size={5} />

          <View style={{flexDirection: 'row'}}>
            <FlatList
              data={buttons}
              horizontal
              keyExtractor={item => item.key}
              renderItem={renderButton}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <SizeBox size={5} />
          {tourHighlights === 0 ? (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          ) : null}
          {/* Price & Availability */}
          <SizeBox size={10} />
          <Text style={{...commonStyles.font20navy}}>Price & Availability</Text>
          <SizeBox size={10} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <View style={styles.headerRow}>
                {columns.map((header, index) => (
                  <Text key={index} style={[styles.text, styles.headerText]}>
                    {header}
                  </Text>
                ))}
              </View>
              <View style={styles.dataRow}>
                {rowdata.map((value, index) => (
                  <Text key={index} style={[styles.text, styles.dataText]}>
                    {value}
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
          {/* Gallery */}
          <SizeBox size={10} />
          <Text style={{...commonStyles.font20navy}}>Gallery</Text>
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
          {/* Itinerary */}
          <SizeBox size={10} />
          <Text style={{...commonStyles.font20navy}}>Itinerary</Text>
          <SizeBox size={5} />
          <FlatList
            data={days}
            renderItem={renderDaysList}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
          <SizeBox size={10} />
          <View style={styles.outercon}>
            <View style={{height: height / 4}}>
              <MapView
                style={styles.map}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <Marker coordinate={pin} title={'My Marker'} description={''} />
              </MapView>
            </View>
            <SizeBox size={5} />
            <Text style={{...commonStyles.font14Bold}}>
              Day 1 - Disney Travel Tour 290
            </Text>
            <SizeBox size={2} />
            <Text style={{...commonStyles.font12Regualar2}}>
              Ensure that you check for any travel restrictions and entry
              requirements.
            </Text>
            <SizeBox size={5} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 5,
              }}>
              <Text style={{...commonStyles.font12Regular}}>
                Meals Provided
              </Text>
              <Text style={{...commonStyles.font12Regualar2}}>None</Text>
            </View>
            <SizeBox size={2} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 5,
              }}>
              <Text style={{...commonStyles.font12Regular}}>Hotel</Text>
              <Text
                style={{
                  ...commonStyles.font12Regualar2,
                  width: '75%',
                  textAlign: 'right',
                }}>
                Howard Johnson by Wyndham Anaheim Hotel & Water Playground or
                similar category
              </Text>
            </View>
            <SizeBox size={2} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 5,
              }}>
              <Text style={{...commonStyles.font12Regular}}>Activities</Text>
              <Text style={{...commonStyles.font12Regualar2}}>None</Text>
            </View>
            <SizeBox size={2} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 5,
              }}>
              <Text style={{...commonStyles.font12Regular}}>Timeline</Text>
              <View style={{alignItems: 'flex-end'}}>
                <Text
                  style={{
                    ...commonStyles.font12Regualar2,
                  }}>
                  1. Arrival in Anaheim.
                </Text>
                <Text
                  style={{
                    ...commonStyles.font12Regualar2,
                  }}>
                  2. Hotel check in.
                </Text>
                <Text
                  style={{
                    ...commonStyles.font12Regualar2,
                  }}>
                  3. Free time{' '}
                </Text>
                <Text
                  style={{
                    ...commonStyles.font12Regualar2,
                  }}>
                  4. Night in Anaheim
                </Text>
              </View>
            </View>
          </View>
          {/* Accomodation */}
          <SizeBox size={10} />
          <Text style={{...commonStyles.font20navy}}>Accomodation</Text>
          <SizeBox size={5} />
          <View style={styles.outercon}>
            <Image
              source={ImagePath.Cartoon}
              style={{
                width: '100%',
                height: moderateScaleVertical(214),
                borderRadius: 10,
              }}
            />
            <SizeBox size={5} />
            <Text style={{...commonStyles.font13, textAlign: 'justify'}}>
              Rihga Royal Hotel Kyoto or similar category
            </Text>
            <SizeBox size={2} />
            <Text
              style={{...commonStyles.font12Regualar2, textAlign: 'justify'}}>
              Renovated in September 2016, our hotel provides all the necessary
              comforts while maintaining the traditions of a brand that has
              proudly hosted royalty. With all new facilities, including
              complimentary Wi-Fi, six restaurants, a luxurious bar, a heated
              indoor pool, and a modern fitness gym, we gladly extend our
              welcome to families, businessmen, and tourists alike.
            </Text>
            <SizeBox size={5} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity activeOpacity={0.8} style={styles.standardbtn}>
                <Text
                  style={{
                    ...commonStyles.font12Regualar2,
                    color: Colors.white,
                  }}>
                  Kyoto
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.standardbtn}>
                <Text
                  style={{
                    ...commonStyles.font12Regualar2,
                    color: Colors.white,
                  }}>
                  Standard
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Airfare & Transportation */}
          <SizeBox size={10} />
          <Text style={{...commonStyles.font20navy}}>
            Airfare & Transportation
          </Text>
          <SizeBox size={5} />
          <View style={styles.outercon}>
            <Image
              source={ImagePath.jahaaj}
              style={{
                width: '100%',
                height: moderateScaleVertical(214),
                borderRadius: 10,
              }}
            />
            <SizeBox size={5} />
            <Text
              style={{...commonStyles.font12Regualar2, textAlign: 'justify'}}>
              Transportation will be included throughout this travel tour. If
              you need airfare included for your guided tour please contact us
              today and we will be able to provide you with airfare
              accommodations. If you contact us about airfare the price of your
              guided tour will very so we will get back to you within 24-48
              hours.
            </Text>
          </View>
        </View>
        <SizeBox size={10} />
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <View>
          <Text style={{...commonStyles.font12Regualar2, fontStyle: 'italic'}}>
            02 Nov 2025 - 11 Nov 2025
          </Text>
          <Text style={{...commonStyles.font16White}}>England Tour 27</Text>
        </View>
        <TouchableOpacity style={styles.booknowbtn}>
          <Text style={{...commonStyles.font14Center}}>Book now</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PackageDetail;
