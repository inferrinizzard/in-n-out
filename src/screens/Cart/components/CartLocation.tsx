import { Box, Text } from "@src/components";
import LogoSvg from "@src/svg/logo";

const CartLocation = () => {
	return (
		<Box
			flexDirection="row"
			padding="m"
			gap="m"
			alignItems="center"
			borderBottomColor="greyLight"
			borderBottomWidth={1}
		>
			<Box style={{ height: 48, width: 72 }}>
				<LogoSvg />
			</Box>
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
