import { Button, StyleSheet, Text, View } from 'react-native';

import { type StackScreenProps } from './routes';

export interface DetailsProps {}

const Details: React.FC<DetailsProps & StackScreenProps<'Details'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Details Screen</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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
