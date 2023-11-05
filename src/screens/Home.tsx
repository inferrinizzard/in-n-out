import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type StackScreenProps } from './routes';

export interface HomeProps {}

const Home: React.FC<HomeProps & StackScreenProps<'Home'>> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button onPress={() => navigation.navigate('Details')}>
        {'Go to Details'}
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
