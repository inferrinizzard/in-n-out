import { Button, Text, View } from "react-native-ui-lib";

import { type StackScreenProps } from "./routes";

export interface DetailsProps {}

const Details: React.FC<DetailsProps & StackScreenProps<"Details">> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Details Screen</Text>

      <Button label="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Details;
