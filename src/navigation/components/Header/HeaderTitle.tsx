import type { PropsWithChildren } from "react";
import { View } from "react-native";
import { useAtomValue } from "jotai";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { Text } from "@src/components";
import { getCopy } from "@src/utils/getCopy";

export interface HeaderTitleProps {
	children: string;
}

const HeaderTitle = ({ children }: PropsWithChildren<HeaderTitleProps>) => {
	const activeItem = useAtomValue(activeItemAtom);
	const title = getCopy(activeItem?.name) || children;

	return (
		<View>
			<Text variant="header" style={{ fontSize: 32, fontWeight: "bold" }}>
				{title.toUpperCase()}
			</Text>
		</View>
	);
};

export default HeaderTitle;
