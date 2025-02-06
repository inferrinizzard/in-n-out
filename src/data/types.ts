export type SkuId = keyof typeof Menu;

export type MenuItem<Id extends SkuId = SkuId> = (typeof Menu)[Id];

// export type CustomisationOption<
// 	Key extends CustomisationKey = CustomisationKey,
// > = (typeof CustomisationData)[Key];

// export type SkuCustomisationKey<Id extends SkuId> = CustomisationKey &
// 	keyof CustomisationEntry<Id>;
// export type CustomisationKey = keyof typeof CustomisationData;
// export type CustomisationValue<
// 	Key extends CustomisationKey = CustomisationKey,
// > = CustomisationOption<Key>["options"][number];

// export interface CustomisationNode {
// 	base: readonly CustomisationKey[];
// 	more?: readonly CustomisationKey[];
// 	flags?: readonly string[];
// }

// type CustomisationNodeKeys<Node extends CustomisationNode> =
// 	| Node["base"][number]
// 	| (Node["more"] & CustomisationKey[])[number];

// export type ItemCustomisations<Id extends SkuId> =
// 	Id extends keyof typeof customisationOptionMap
// 		? (typeof CustomisationTree)[(typeof customisationOptionMap)[Id]]
// 		: never;

// export type CustomisationEntry<
// 	Id extends SkuId,
// 	Customisations extends CustomisationNode = ItemCustomisations<Id>,
// 	Options extends CustomisationKey = CustomisationNodeKeys<Customisations>,
// > = Id extends keyof typeof customisationOptionMap
// 	? Partial<{
// 			[OptionValue in Options]: {
// 				data: CustomisationValue<OptionValue>;
// 				flags?: "flags" extends keyof (typeof CustomisationData)[OptionValue]
// 					? undefined extends (typeof CustomisationData)[OptionValue]["flags"]
// 						? undefined
// 						: Record<
// 								((typeof CustomisationData)[OptionValue]["flags"] &
// 									string[])[number],
// 								boolean | undefined
// 							>
// 					: undefined;
// 			};
// 		}>
// 	: never;
