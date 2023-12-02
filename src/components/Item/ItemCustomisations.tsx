import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import ItemCustomisationRow from './ItemCustomisationRow';

import { type ItemCustomisationOption } from '../../data/customisations';

export interface ItemCustomisationsProps {
  customisations?: ItemCustomisationOption;
}

const ItemCustomisations: React.FC<ItemCustomisationsProps> = ({
  customisations,
}) => {
  if (!customisations) {
    return null;
  }

  return (
    <View>
      {Object.entries(customisations.base).map(([key, val]) => (
        <ItemCustomisationRow name={key} {...val} />
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
