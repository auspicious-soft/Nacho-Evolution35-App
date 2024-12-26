import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Utilities/Styles/responsiveSize';

const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.navyblue,
    fontFamily: fontFamily.regular,
  },
  welcometxt: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.secondaryfont,
    fontFamily: fontFamily.regular,
  },
  txtimgcon: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 30,
    paddingHorizontal: 20,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    height: 50,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
    fontFamily: fontFamily.regular,
    paddingLeft: 10,
  },
  separator: {
    height: moderateScaleVertical(20),
    width: 1,
    backgroundColor: Colors.black,
    marginHorizontal: 10,
  },
  filterIconContainer: {
    padding: 8,
  },
  buttonscon: {
    height: moderateScaleVertical(48),
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 2,
    width: '90%',
    backgroundColor: Colors.white,
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 12,
    elevation: 3,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
  },
  filtercon: {
    paddingHorizontal: 20,
    backgroundColor: Colors.navyblue,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.secondaryfont,
    fontFamily: fontFamily.regular,
    marginTop: 10,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: '#1F1F1F',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    height: 40,
  },
  itemText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
  },
  outerview: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginVertical: 10,
  },
  tabcontainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    top: 5,
    right: 5,
    alignSelf: 'flex-end',
  },
  traveltxt: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: fontFamily.regular,
    color: Colors.navyblue,
  },
  daytxt: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.secondaryfont,
    marginTop: 2,
  },
  arrowcon: {
    width: moderateScaleVertical(36),
    height: moderateScale(36),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryblue,
  },
  filtertxt: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.white,
  },
});
export default styles;