import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAtomValue } from "jotai";

import { queueAtom } from "@src/atoms/queue.atom";

const ContinueButton = () => {
	const queue = useAtomValue(queueAtom)!;

	const next = queue[0];

	return (
		<View
			style={{
				display: "flex",
				flex: 1,
				gap: "2rem",
				position: "absolute",
				bottom: 0,
			}}
		>
			{next && (
				<Button onPress={() => {}}>
					<Text>{`Skip ${next}`}</Text>
				</Button>
			)}
			<Button onPress={() => {}}>
				<Text>{next ? `Add ${next}` : "Add to Order"}</Text>
			</Button>
		</View>
	);
};

export default ContinueButton;
