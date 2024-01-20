import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { StackScreenProps } from '../navigators/StackNavigator';

export interface MoreProps {}

const More: React.FC<MoreProps & StackScreenProps<'More'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>More Screen</Text>

      <Button onPress={() => navigation.navigate('Menu')}>
        {'Go to Menu'}
      </Button>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
