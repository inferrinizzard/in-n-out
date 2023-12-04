import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import ItemCustomisationRow from './ItemCustomisationRow';

import { type CustomisationNode } from '../../data/customisations';

export interface ItemCustomisationsProps {
  customisations?: CustomisationNode;
}

const ItemCustomisations: React.FC<ItemCustomisationsProps> = ({
  customisations,
}) => {
  if (!customisations) {
    return null;
  }

  const [showMore, setShowMore] = useState(false);

  return (
    <View>
      {customisations.base.map((key) => (
        <ItemCustomisationRow key={key} name={key} />
      ))}

      {customisations.more && (
        <>
          {showMore &&
            customisations.more.map((key) => (
              <ItemCustomisationRow key={key} name={key} />
            ))}
          <Button onPress={() => setShowMore((prev) => !prev)}>
            <Text>{showMore ? 'Less' : 'More'}</Text>
          </Button>
        </>
      )}
    </View>
  );
};

export default ItemCustomisations;
