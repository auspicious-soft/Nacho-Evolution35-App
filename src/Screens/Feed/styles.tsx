import {Platform, StyleSheet} from 'react-native';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Utilities/Styles/responsiveSize';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:
      Platform.OS === 'ios'
        ? moderateScaleVertical(120)
        : moderateScaleVertical(115),
    height: Platform.OS === 'ios' ? moderateScale(120) : moderateScale(115),
    borderRadius: 1,
  },
  row: {
    justifyContent: 'space-between',
  },
  flatListContainer: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: width / 1.18,
    height: height / 1.6,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 12,
    fontFamily: fontFamily.regular,
  },
});

export default styles;
