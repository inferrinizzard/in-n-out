import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type TabScreenProps } from '../navigators/BottomTabs';

export interface MoreProps {}

const More: React.FC<MoreProps & TabScreenProps<'TabMore'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>More Screen</Text>

      <Button onPress={() => navigation.navigate('TabMenu')}>
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
