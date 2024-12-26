import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';

const styles = StyleSheet.create({
  outercon: {
    backgroundColor: Colors.white,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  quentitytxt: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.primaryblue,
    marginHorizontal: 10,
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
});

export default styles;
