import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {height} from '../../Utilities/Styles/responsiveSize';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';
import commonStyles from '../../Utilities/Styles/commonStyles';
import styles from './style';

const DATA = [
  {id: '1', title: 'Paris Travel Tour 292', duration: '4 days/ 3 nights'},
  {id: '2', title: 'Rome Adventure 101', duration: '3 days/ 2 nights'},
  {id: '3', title: 'London Explorer 123', duration: '5 days/ 4 nights'},
  {id: '4', title: 'Paris Travel Tour 292', duration: '5 days/ 4 nights'},
  {id: '5', title: 'Rome Adventure 101', duration: '5 days/ 4 nights'},
  {id: '6', title: 'London Explorer 123', duration: '5 days/ 4 nights'},
];

const MyBookings = ({navigation}: any) => {
  const renderTourList = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.outerview}
      onPress={() => navigation.navigate('BookingSummary')}>
      <ImageBackground
        source={ImagePath.Boat}
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
          onPress={() => navigation.navigate('BookingSummary')}>
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
          My Bookings
        </Text>
      </View>
      <SizeBox size={5} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={DATA}
            renderItem={renderTourList}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <SizeBox size={20} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyBookings;
