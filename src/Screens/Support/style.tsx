import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';

const styles = StyleSheet.create({
  datecontainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
  },
  phonetxt: {
    fontSize: 10,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    color: Colors.secondaryfont,
  },
});
export default styles;
