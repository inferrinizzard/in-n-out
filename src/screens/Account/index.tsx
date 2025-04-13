import { Icon, List } from "react-native-paper";

import type { StackScreenProps } from "@src/navigation";
import type { ScreenKeys } from "@src/navigation/screens";
import { Text } from "@src/components";

import ScreenContainer from "../../components/layout/ScreenContainer";

export interface AccountProps
	extends StackScreenProps<typeof ScreenKeys.Account> {}

const Account = ({ navigation }: AccountProps) => {
	return (
		<ScreenContainer>
			<List.Section
			// title={<Text>{"Welcome, <Name>"}</Text>}
			>
				<List.Item
					title={<Text>{"Settings"}</Text>}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"Privacy"}</Text>}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"Payment Methods"}</Text>}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={<Text>{"Notifications"}</Text>}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
			</List.Section>
		</ScreenContainer>
	);
};

export default Account;
