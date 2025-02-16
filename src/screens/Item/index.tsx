import type { StackScreenProps, ScreenKeys } from "@src/navigation";
import ScreenContainer from "@src/components/layout/ScreenContainer";

import { ItemHeader } from "./components/ItemHeader";
import ContinueButton from "./components/ContinueButton";
import { ItemOptions } from "./components/ItemOptions";

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
