import { Text, TouchableOpacity, View } from "react-native";
import { moderateScaleVertical } from "../../Styles/responsiveSize";
import styles from "../style";


export function SizeBox({size}: SizeBoxProps) {
  return <View style={{marginVertical: moderateScaleVertical(size)}} />;
}

export function CommonBtn({onPress, title}: CommonBtnProps) {
  return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.loginButton}>
        <Text
          style={styles.loginButtonText}>
          {title}
        </Text>
      </TouchableOpacity>
  );
}



