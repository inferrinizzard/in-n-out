import { Icon, List } from "react-native-paper";

import type { StackScreenProps } from "@src/navigation";
import type { ScreenKeys } from "@src/navigation/screens";

import ScreenContainer from "../../components/layout/ScreenContainer";

export interface AccountProps
	extends StackScreenProps<typeof ScreenKeys.Account> {}

const Account = ({ navigation }: AccountProps) => {
	return (
		<ScreenContainer>
			<List.Section title="Welcome, <Name>">
				<List.Item
					title={"Settings"}
					left={() => <Icon source={"cog"} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"Privacy"}
					left={() => <Icon source={"cog"} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"Payment Methods"}
					left={() => <Icon source={"cog"} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
				<List.Item
					title={"Notifications"}
					left={() => <Icon source={"cog"} size={24} />}
					right={() => <Icon source={"chevron-right"} size={24} />}
				/>
			</List.Section>
		</ScreenContainer>
	);
};

export default Account;
