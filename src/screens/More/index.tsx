import { Icon, List } from "react-native-paper";

import type { StackScreenProps } from "@src/navigation";
import type { ScreenKeys } from "@src/navigation/screens";

import ScreenContainer from "../../components/layout/ScreenContainer";

export interface MoreProps extends StackScreenProps<typeof ScreenKeys.More> {}

const More = ({ navigation }: MoreProps) => {
	return (
		<ScreenContainer>
			<List.Section
			// title="Welcome, <Name>"
			>
				<List.Item
					title={"Locations"}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"History"}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"Careers"}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"Merchandise"}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"Foundations"}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"Catering"}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"Gift Cards"}
					// left={() => <Icon source={'cog'} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
			</List.Section>
		</ScreenContainer>
	);
};

export default More;
