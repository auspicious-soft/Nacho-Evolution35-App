import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../Utilities/Styles/responsiveSize';

const styles = StyleSheet.create({
  updateimgbtn: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    bottom: 40,
    right: 10,
    padding: 10,
    borderRadius: 22,
  },
  profilecon: {
    backgroundColor: Colors.white,
    top: -50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  countrytxt: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    color: Colors.black,
    marginLeft: 10,
  },
  countryimgcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  datetxt: {
    fontSize: 10,
    fontFamily: fontFamily.regular,
    color: Colors.textgrey,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  txtouterview: {
    backgroundColor: Colors.skyblue,
    padding: 10,
    borderRadius: 39,
  },
  dates: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: Colors.navyblue,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  placeserveytxt: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: Colors.secondaryfont,
    fontWeight: '500',
    textAlign: 'justify',
  },
  overviewtxt: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: Colors.navyblue,
    fontWeight: '700',
  },
  dayphase: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: Colors.secondaryfont,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: Colors.navyblue,
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 10,
  },
  booknowbtn: {
    backgroundColor: Colors.primaryblue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 38,
  },
  restrictionview: {
    backgroundColor: Colors.skyblue,
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  restrictiontxt: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: fontFamily.regular,
    color: Colors.secondaryfont,
    textAlign: 'justify',
  },
  vectorcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    top: 15,
    right: 10,
    alignSelf: 'flex-end',
  },
  glancebtn: {
    backgroundColor: Colors.navyblue,
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  btntxt: {
    fontSize: 10,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.white,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: moderateScale(100),
    height: moderateScaleVertical(86),
    borderRadius: 5,
  },

  textContainer: {
    marginLeft: 10,
  },
  description: {
    width: '60%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 12,
    fontFamily: fontFamily.regular,
  },
  tabcontainer: {
    width: moderateScaleVertical(25),
    height: moderateScale(25),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  daytxt: {
    backgroundColor: Colors.white,
    borderRadius: 36,
    paddingVertical: 5,
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: Colors.navyblue,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: fontFamily.regular,
  },
  listContainer: {},
  selectedDayView: {
    backgroundColor: Colors.navyblue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginRight: 5,
  },
  unselectedDayView: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginRight: 5,
  },
  selectedText: {
    fontSize: 10,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.white,
  },
  unselectedText: {
    fontSize: 10,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.secondaryfont,
  },
  outercon: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
  },
  standardbtn: {
    backgroundColor: Colors.primaryblue,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#3F87F5',
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
  },
  dataRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    minWidth: 120,
    paddingVertical: 10,
    textAlign: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  dataText: {
    color: '#555',
    fontSize: 14,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
});
export default styles;
