import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

import { ScreenKeys, type StackScreenProps } from "@src/navigation";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { queueAtom } from "@src/atoms/queue.atom";
import { orderAtom } from "@src/atoms/order.atom";

interface ContinueButtonProps
	extends Pick<StackScreenProps<typeof ScreenKeys.Item>, "navigation"> {}

const ContinueButton = ({ navigation }: ContinueButtonProps) => {
	const activeItem = useAtomValue(activeItemAtom)!;
	const [queue, queueSetter] = useAtom(queueAtom)!;
	const { addItem } = useSetAtom(orderAtom)();

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
			<Button
				onPress={() => {
					addItem(activeItem);
					navigation.replace(ScreenKeys.Cart);
					if (next) {
						queueSetter().shift();
					}
				}}
			>
				<Text>{next ? `Add ${next}` : "Add to Order"}</Text>
			</Button>
		</View>
	);
};

export default ContinueButton;
