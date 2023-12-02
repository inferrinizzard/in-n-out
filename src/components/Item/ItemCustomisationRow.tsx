import { Image, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { type CustomisationOption } from '../../data/customisations';

export interface ItemCustomisationRowProps<Options extends readonly string[]>
  extends CustomisationOption<Options> {
  name: string;
}

const ItemCustomisationRow = <Options extends readonly string[]>({
  name,
  default: _default,
  options,
  flags,
}: ItemCustomisationRowProps<Options>) => {
  return (
    <View>
      <Text>{name}</Text>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {options.map((option) => (
          <Card key={option}>
            <Card.Content style={{ display: 'flex', flexDirection: 'row' }}>
              {/* <Image source={{ uri: imageUrl, height: 120, width: 160 }} /> */}
              <Text>{option}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      {flags && flags.map((flag) => <Text>{flag}</Text>)}
    </View>
  );
};

export default ItemCustomisationRow;
