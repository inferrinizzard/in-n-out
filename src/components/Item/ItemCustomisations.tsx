import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import ItemCustomisationRow from './ItemCustomisationRow';

import { type CustomisationNode } from '../../data/customisations.types';

export interface ItemCustomisationsProps {
  customisations?: CustomisationNode;
}

const ItemCustomisations: React.FC<ItemCustomisationsProps> = ({
  customisations,
}) => {
  if (!customisations) {
    return null;
  }

  return (
    <View>
      {customisations.base.map((key) => (
        <ItemCustomisationRow key={key} name={key} />
      ))}

      {customisations.more && (
        <Button>
          <Text>{'More'}</Text>
        </Button>
      )}
    </View>
  );
};

export default ItemCustomisations;
