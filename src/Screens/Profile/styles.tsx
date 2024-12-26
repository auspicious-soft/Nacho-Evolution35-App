import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';

const styles = StyleSheet.create({
  profilecon: {
    backgroundColor: Colors.white,
    // height: height,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
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
  datecontainer: {
    backgroundColor: Colors.skyblue,
    padding: 10,
    borderRadius: 10,
  },
  phonetxt: {
    fontSize: 10,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    color: Colors.secondaryfont,
  },
  outerview: {
    backgroundColor: Colors.gentlegrey,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  imageview: {
    backgroundColor: Colors.white,
    width: 31,
    height: 31,
    borderRadius: 15.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookingtxt: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    fontWeight: 600,
    color: Colors.navyblue,
    marginLeft: 15,
  },
  bottomline: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.white,
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
});

export default styles;
