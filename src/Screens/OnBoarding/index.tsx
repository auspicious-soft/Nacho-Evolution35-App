import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import ImagePath from '../../Utilities/Constants/ImagePath';
import styles from './style';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';
import {Colors} from '../../Utilities/Styles/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const OnBoarding = ({navigation}: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    ImagePath.Onboarding,
    ImagePath.Onboardingone,
    ImagePath.Onboardingtwo,
  ];

  const handleSkip = () => {
    navigation.push(NavigationStrings.LoginScreen);
  };

  const handleNext = () => {
    if (activeIndex < images.length - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      swiperRef.current.scrollTo({
        x: newIndex * screenWidth,
        animated: true,
      });
    } else {
      navigation.push(NavigationStrings.LoginScreen);
    }
  };

  const nextButtonScale = useRef(new Animated.Value(1)).current;

  const animateNextButton = () => {
    Animated.sequence([
      Animated.timing(nextButtonScale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      // Animated.timing(nextButtonScale, {
      //   toValue: 1,
      //   duration: 50,
      //   useNativeDriver: true,
      // }),
    ]).start(() => {
      setTimeout(() => {
        handleNext();
      }, 200);
    });
  };

  const backgroundColor = scrollX.interpolate({
    inputRange: [0, screenWidth, 2 * screenWidth],
    outputRange: [Colors.white, Colors.white, Colors.white],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={{flex: 1, backgroundColor}}>
      <Animated.ScrollView
        ref={swiperRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onMomentumScrollEnd={e => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const index = Math.floor(contentOffsetX / screenWidth);
          setActiveIndex(index); // Update active index when scrolling finishes
        }}>
        {images.map((image, index) => {
          const inputRange = [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={{
                width: screenWidth,
                transform: [{scale}],
                opacity,
              }}>
              <ImageBackground
                source={image}
                style={{
                  width: screenWidth,
                  height: screenHeight,
                  justifyContent: 'flex-end',
                }}
                resizeMode="cover">
                <View style={styles.textContainer}>
                  <Text style={styles.dealtxt}>Get the Best Deal</Text>
                  <SizeBox size={5} />
                  <Text style={styles.dealdesctxt}>
                    We provide a range of exclusive promotions and discounts to
                    make your trip more affordable.
                  </Text>
                </View>
                {/* Indicator */}
                <View
                  style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                  }}>
                  {images.map((_, indicatorIndex) => (
                    <View
                      key={indicatorIndex}
                      style={{
                        height: 3,
                        width: 12,
                        backgroundColor:
                          indicatorIndex === activeIndex
                            ? Colors.white
                            : Colors.skipgrey,
                        marginHorizontal: 3,
                        borderRadius: 17,
                      }}
                    />
                  ))}
                </View>
                <SizeBox size={10} />
                {/* Buttons */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.skipbtn}
                    onPress={handleSkip}
                    activeOpacity={0.7}>
                    <Text style={styles.buttontxt}>Skip</Text>
                  </TouchableOpacity>

                  <Animated.View
                    style={{transform: [{scale: nextButtonScale}]}}>
                    <TouchableOpacity
                      style={styles.Nextbtn}
                      onPress={animateNextButton}
                      activeOpacity={0.7}>
                      <Text style={styles.buttontxt}>Next</Text>
                    </TouchableOpacity>
                  </Animated.View>
                </View>
                <SizeBox size={30} />
              </ImageBackground>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default OnBoarding;
