import { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

import type { SkuId } from "@data/types";

import ItemCustomisationRow from "./ItemCustomisationRow";

// import type {
// 	SkuCustomisationKey,
// 	CustomisationNode,
// } from "../../../data/customisations";

export interface ItemCustomisationsProps {
	customisations: any;
}

const ItemCustomisations = <Id extends SkuId>({
	customisations,
}: ItemCustomisationsProps) => {
	const [showMore, setShowMore] = useState(false);

	return (
		<View>
			{customisations.base.map((key) => (
				<ItemCustomisationRow<Id, SkuCustomisationKey<Id>>
					key={key}
					name={key as SkuCustomisationKey<Id>}
				/>
			))}

			{customisations.more && (
				<>
					{showMore &&
						customisations.more.map((key) => (
							<ItemCustomisationRow<Id, SkuCustomisationKey<Id>>
								key={key}
								name={key as SkuCustomisationKey<Id>}
							/>
						))}
					<Button onPress={() => setShowMore((prev) => !prev)}>
						<Text>{showMore ? "Less" : "More"}</Text>
					</Button>
				</>
			)}
		</View>
	);
};

export default ItemCustomisations;
