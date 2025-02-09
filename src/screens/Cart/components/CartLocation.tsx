import { Box, Text } from "@src/components";
import { Image } from "react-native";

const CartLocation = () => {
	return (
		<Box
			flexDirection="row"
			position="absolute"
			padding="m"
			top={0}
			gap="m"
			alignItems="center"
			style={{ insetInline: 0 }}
			borderBottomColor="greyLight"
			borderBottomWidth={1}
		>
			<Image
				source={require("@images/logo.svg")}
				style={{ height: 48, width: 72 }}
				resizeMode="contain"
			/>
			<Box flexGrow={1} style={{ gap: 4 }}>
				<Text>{"Your Local In-n-Out:"}</Text>
				<Text>{"13766 Francisquito Ave,"}</Text>
				<Text>{"Open Until: 1am"}</Text>
			</Box>
			<Box>
				<Text>{"Change"}</Text>
			</Box>
		</Box>
	);
};

export default CartLocation;
