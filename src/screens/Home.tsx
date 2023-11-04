import { Button, Text, View } from "react-native-ui-lib";
import { type StackScreenProps } from "./routes";

export interface HomeProps {}

const Home: React.FC<HomeProps & StackScreenProps<"Home">> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        label="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default Home;
