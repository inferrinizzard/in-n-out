import type { StackScreenProps } from "@src/navigation";
import type { ScreenKeys } from "@src/navigation/screens";
import { ScreenContainer } from "@src/components";

import { ItemHeader } from "./components/ItemHeader";
import ContinueButton from "./components/ContinueButton";
import { ItemOptions } from "./customisation/ItemOptions";

export interface ItemProps extends StackScreenProps<typeof ScreenKeys.Item> {}

const Item = ({ navigation }: ItemProps) => {
	return (
		<ScreenContainer
			Header={<ItemHeader />}
			Footer={<ContinueButton navigation={navigation} />}
		>
			<ItemOptions />
		</ScreenContainer>
	);
};

export default Item;
