import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { type StackScreenProps } from './routes';

export interface DetailsProps {}

const Details: React.FC<DetailsProps & StackScreenProps<'Details'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Details Screen</Text>

      <Button onPress={() => navigation.navigate('Home')}>
        {'Go to Home'}
      </Button>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
