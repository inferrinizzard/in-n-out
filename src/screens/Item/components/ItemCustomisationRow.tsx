import { useMemo, useState } from "react";
import { Image, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

import { OptionCopy } from "@data/copy";
import type {
	CustomisationData,
	CustomisationValue,
	CustomisationKey,
	SkuCustomisationKey,
} from "@data/customisations";
import type { SkuId } from "@data/types";
import type { ItemKey } from "@data/items";

export interface ItemCustomisationRowProps<Key extends ItemKey> {
	id: Key;
}

const ItemCustomisationRow = <Key extends ItemKey>({
	id,
}: ItemCustomisationRowProps<Key>) => {
	// const [customNumber, setCustomNumber] = useState<number | null>(
	// 	activeOption?.data &&
	// 		typeof activeOption.data === "number" &&
	// 		activeOption.data > 3
	// 		? activeOption.data
	// 		: null,
	// );
	// const data = CustomisationData[name];
	// const updateCustomisation = (value: CustomisationValue<Key>) =>
	// 	dispatch(updateActiveCustomisations({ data: { name, value } }));
	// const updateFlag = (flag: string, value: boolean) =>
	// 	dispatch(updateActiveCustomisations({ flags: { name, flag, value } }));
	// return (
	// 	<View style={{ maxWidth: "100%" }}>
	// 		{data.type !== "flags" ? <Text>{OptionCopy[name]}</Text> : null}
	// 		<View style={{ display: "flex", flexDirection: "row" }}>
	// 			{data.options.map((option) => (
	// 				<Card
	// 					key={option}
	// 					onPress={() => {
	// 						updateCustomisation(option);
	// 						setCustomNumber(null);
	// 					}}
	// 				>
	// 					<Card.Content
	// 						style={{
	// 							display: "flex",
	// 							flexDirection: "row",
	// 							borderColor: "black",
	// 							borderRadius: 8,
	// 							borderWidth: activeOption?.data === option ? 2 : 0,
	// 						}}
	// 					>
	// 						{/* <Image source={{ uri: imageUrl, height: 120, width: 160 }} /> */}
	// 						<Text>
	// 							{option in OptionCopy
	// 								? OptionCopy[option as keyof typeof OptionCopy]
	// 								: option}
	// 						</Text>
	// 					</Card.Content>
	// 				</Card>
	// 			))}
	// 			{data.type === "number" ? (
	// 				<>
	// 					<Card
	// 						key={`${name}-custom`}
	// 						onPress={() =>
	// 							setCustomNumber((prev) => (prev === null ? data.default : null))
	// 						}
	// 					>
	// 						<Card.Content
	// 							style={{
	// 								display: "flex",
	// 								flexDirection: "row",
	// 								borderColor: "black",
	// 								borderRadius: 8,
	// 								borderWidth: customNumber !== null ? 2 : 0,
	// 							}}
	// 						>
	// 							<Text>{"Custom"}</Text>
	// 						</Card.Content>
	// 					</Card>
	// 					{customNumber !== null && (
	// 						<Card key={`${name}-custom-input`}>
	// 							<Card.Content>
	// 								<TextInput
	// 									keyboardType="numeric"
	// 									onKeyPress={(e) => {
	// 										// @ts-ignore
	// 										const inputNumber = Number(e.key.replace(/\D/g, ""));
	// 										if (inputNumber) {
	// 											setCustomNumber(inputNumber);
	// 											updateCustomisation(
	// 												inputNumber as CustomisationValue<Key>,
	// 											);
	// 										}
	// 									}}
	// 									value={customNumber.toString()}
	// 									maxLength={1}
	// 									style={{ maxWidth: 50, height: 50 }}
	// 								/>
	// 							</Card.Content>
	// 						</Card>
	// 					)}
	// 				</>
	// 			) : null}
	// 		</View>
	// 		{"flags" in data &&
	// 			data.flags.map((flag) => {
	// 				const isFlagActive =
	// 					activeOption?.flags?.[flag as keyof typeof activeOption.flags];
	// 				return (
	// 					<Button
	// 						key={flag}
	// 						onPress={() => updateFlag(flag, !isFlagActive)}
	// 						style={{
	// 							borderColor: "black",
	// 							borderRadius: 8,
	// 							borderWidth: isFlagActive ? 2 : 0,
	// 						}}
	// 					>
	// 						<Text>{OptionCopy[flag]}</Text>
	// 					</Button>
	// 				);
	// 			})}
	// 	</View>
	// );
};

export default ItemCustomisationRow;
