import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type TabScreenProps } from './routes';

export interface AccountProps {}

const Account: React.FC<AccountProps & TabScreenProps<'Account'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Account Screen</Text>

      <Button onPress={() => navigation.navigate('Menu')}>
        {'Go to Menu'}
      </Button>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
