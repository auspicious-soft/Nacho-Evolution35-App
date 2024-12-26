import {StyleSheet} from 'react-native';
import {Colors} from '../Styles/colors';
import fontFamily from '../Styles/fontFamily';

const styles = StyleSheet.create({
    loginButton: {
    width: "100%",
        height: 50,
        backgroundColor: Colors.navyblue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 39,
        alignSelf:"center"
      },
      loginButtonText: {
        color: Colors.greytext,
        fontSize: 12,
        fontWeight:"500",
        fontFamily:fontFamily.regular
      },
})
export default styles;