import { Button, StyleSheet, Text, View } from "react-native";

import { type StackScreenProps } from "./routes";

export interface HomeProps {}

const Home: React.FC<HomeProps & StackScreenProps<"Home">> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
