import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import ImagePath from '../../Utilities/Constants/ImagePath';
import styles from './styles';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Utilities/Styles/responsiveSize';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import {Colors} from '../../Utilities/Styles/colors';
import commonStyles from '../../Utilities/Styles/commonStyles';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';

const Feed = ({navigation}: any) => {
  const images = [
    ImagePath.City,
    ImagePath.Cartoon,
    ImagePath.Onboardingone,
    ImagePath.Girl,
  ];

  const imageData = Array.from(
    {length: 102},
    (i, index) => images[index % images.length],
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = index => {
    setCurrentIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const showPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNext = () => {
    if (currentIndex < imageData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity onPress={() => openModal(index)}>
      <View style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={imageData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <SizeBox size={40} />}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        style={{flex: 1}}
        onRequestClose={closeModal}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: Colors.greytext}}>
            <TouchableOpacity
              onPress={closeModal}
              activeOpacity={0.7}
              style={{marginTop: 10, marginLeft: 10}}>
              <Image
                source={ImagePath.backClick}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
            <View style={styles.modalContainer}>
              <ImageBackground
                borderRadius={10}
                width={width / 1.05}
                source={imageData[currentIndex]}
                style={styles.modalImage}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={showPrevious}
                    disabled={currentIndex === 0}
                    style={styles.button}>
                    <VectorIcon
                      groupName="MaterialCommunityIcons"
                      name="less-than"
                      size={10}
                    />
                    <Text style={styles.buttonText}>{` `}Previous</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={showNext}
                    disabled={currentIndex === imageData.length - 1}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Next{` `}</Text>
                    <VectorIcon
                      groupName="MaterialCommunityIcons"
                      name="greater-than"
                      size={10}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <SizeBox size={10} />
              <Text
                style={{
                  alignSelf: 'flex-start',
                  ...commonStyles.font20navy,
                  paddingHorizontal: 30,
                }}>
                Disney Travel Tour 290
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          position: 'absolute',
          bottom: Platform.OS == 'android' ? 90 : 80,
          right: 20,
        }}>
        <Image
          source={ImagePath.Upload}
          resizeMode="contain"
          style={{
            height: 50,
            width: 50,
            bottom: Platform.OS == 'android' ? 2 : 30,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Feed;
