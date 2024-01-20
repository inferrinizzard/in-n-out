import { Image, StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { type TabScreenProps } from '../navigators/BottomTabs';

export interface QrCodeProps {}

const QrCode: React.FC<QrCodeProps & TabScreenProps<'TabQrCode'>> = ({
  navigation,
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        Scan to Pick Up your Order
      </Text>

      <Image
        source={require('../../assets/images/qrcode.png')}
        style={{ height: 300, width: 300, borderRadius: 24 }}
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
