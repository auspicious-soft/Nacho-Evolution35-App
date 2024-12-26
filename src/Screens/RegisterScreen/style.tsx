import {Platform, StyleSheet} from 'react-native';
import {
  height,
  moderateScaleVertical,
  width,
} from '../../Utilities/Styles/responsiveSize';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: Platform.OS === 'ios' ? height / 1.12 : height / 1.02,
    justifyContent: 'flex-end',
  },
  RegisterContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
  },
  evolutionImage: {
    height: moderateScaleVertical(44),
    width: width / 2,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.navyblue,
    fontFamily: fontFamily.regular,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.secondaryfont,
    marginVertical: 10,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
  },
  createtxt: {
    fontSize: 12,
    color: Colors.primaryblue,
    marginVertical: 10,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
  },
  inputLabel: {
    fontSize: 12,
    color: Colors.secondaryfont,
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: '500',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  textInput: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.greytext,
    borderRadius: 42,
    height: 45,
    paddingLeft: 10,
    color: Colors.black,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: Colors.greytext,
  },
  checkedBox: {
    backgroundColor: Colors.greyTxt,
  },
});
export default styles;