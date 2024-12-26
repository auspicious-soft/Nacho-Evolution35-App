import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import ImagePath from '../../Utilities/Constants/ImagePath';
import commonStyles from '../../Utilities/Styles/commonStyles';
import {SizeBox} from '../../Utilities/Component/hooks/Helpers';
import styles from './style';
import {ScrollView} from 'react-native-gesture-handler';

const PrivacyPolicy = ({navigation}: any) => {
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
          Privacy Policy
        </Text>
      </View>
      <SizeBox size={10} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.datecontainer}>
          <Text style={styles.welcometxt}>Welcome to Evolution35</Text>
          <SizeBox size={10} />
          <Text style={styles.policytxt}>
            Thank you for being a valued part of the Evolution35 community. We
            are dedicated to safeguarding your personal information and
            respecting your privacy. If you have any questions or concerns about
            our policy or our practices regarding your personal data, please
            don't hesitate to reach out to us at info@evolution35.com. By
            visiting our website at https://evolution35.com and using our
            services, you trust us with your personal information. We take this
            responsibility seriously. This privacy notice outlines our privacy
            policy and aims to provide you with clear information about what
            data we collect, how we use it, and the rights you have in relation
            to it. We encourage you to read this notice carefully, as it is
            important for your understanding. If you disagree with any of the
            terms outlined, please refrain from using our site and services.
            This privacy policy applies to all information collected through our
            websites (such as https://evolution35.com and our Facebook
            applications (“Apps”)), as well as any related services, sales,
            marketing, or events (collectively referred to as the “Sites”).
            Please review this privacy policy carefully so you can make informed
            decisions about sharing your personal information with us.
          </Text>
          <SizeBox size={10} />
          <Text style={styles.welcometxt}>Information We Collect:</Text>
          <SizeBox size={10} />
          <Text style={styles.policytxt}>
            We collect personal information that you provide to us, including
            your name, address, contact details, account credentials, payment
            information, and social media login data. When you interact with our
            Sites or Apps—whether by registering, expressing interest in our
            products or services, participating in activities (such as posting
            in online forums or entering contests), or reaching out to us
            directly—we collect the personal information you voluntarily
            provide. The personal information we collect depends on the nature
            of your interactions with us, the choices you make, and the features
            or services you use. This may include the following types of
            information:
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.policytxt}>•</Text>
            <Text style={[styles.policytxt, {marginLeft: 5}]}>
              Name and Contact Information: We collect your first and last name,
              email address, postal address, phone number, and other similar
              contact details, including passport information.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.policytxt}>•</Text>
            <Text style={[styles.policytxt, {marginLeft: 5}]}>
              Account Credentials: We collect passwords, password hints, and
              other security information required for account authentication and
              access.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.policytxt}>•</Text>
            <Text style={[styles.policytxt, {marginLeft: 5}]}>
              Payment Information: If you make a purchase, we collect data
              needed to process your payment, such as your payment method (e.g.,
              credit card number) and the security code associated with it.
              Please note that all payment information is stored by our payment
              processor, and we encourage you to review their privacy policies
              for further details.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.policytxt}>•</Text>
            <Text style={[styles.policytxt, {marginLeft: 5}]}>
              Social Media Login Information: We offer the option to register or
              log in using your social media account details (e.g., Facebook,
              Twitter). If you choose this method, we will collect the
              information outlined in the "Social Logins" section below.
            </Text>
          </View>
          <Text style={styles.policytxt}>
            It is important that all personal information you provide to us is
            accurate, complete, and up-to-date. You are responsible for
            notifying us of any changes to your personal information.
          </Text>
          <SizeBox size={5} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
