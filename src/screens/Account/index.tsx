import { Icon, List } from "react-native-paper";

import { StackScreenProps } from "../../navigators/StackNavigator";
import ScreenContainer from "../../components/ScreenContainer";

import { type ScreenKeys } from "../../consts";

export interface AccountProps {}

const Account: React.FC<
	AccountProps & StackScreenProps<typeof ScreenKeys.Account>
> = ({ navigation }) => {
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
