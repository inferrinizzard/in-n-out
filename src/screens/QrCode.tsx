import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type TabScreenProps } from '../navigators/BottomTabs';

export interface QrCodeProps {}

const QrCode: React.FC<QrCodeProps & TabScreenProps<'TabQrCode'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>QrCode Screen</Text>

      <Button onPress={() => navigation.navigate('TabMenu')}>
        {'Go to Menu'}
      </Button>
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
