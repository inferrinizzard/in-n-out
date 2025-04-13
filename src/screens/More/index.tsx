import { Icon, List } from "react-native-paper";

import type { StackScreenProps } from "@src/navigation";
import type { ScreenKeys } from "@src/navigation/screens";
import { Text } from "@src/components";

import ScreenContainer from "../../components/layout/ScreenContainer";

export interface MoreProps extends StackScreenProps<typeof ScreenKeys.More> {}

const More = ({ navigation }: MoreProps) => {
	return (
		<ScreenContainer>
			<List.Section
			// title="Welcome, <Name>"
			>
				<List.Item
					title={<Text>{"Locations"}</Text>}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"History"}</Text>}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"Careers"}</Text>}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"Merchandise"}</Text>}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"Foundations"}</Text>}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"Catering"}</Text>}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"Gift Cards"}</Text>}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
			</List.Section>
		</ScreenContainer>
	);
};

export default More;
