import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { type TabScreenProps } from '../navigators/BottomTabs';

export interface QrCodeProps {}

const QrCode: React.FC<QrCodeProps & TabScreenProps<'TabQrCode'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Pick-Up Code</Text>

      <Image
        source={require('../../assets/images/qrcode.png')}
        style={{ height: 300, width: 300 }}
      />
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
