import React from "react";

import { useAtomSetter } from "@src/atoms";

import { activeItemAtom } from "@src/atoms/activeItem.atom";
import { queueAtom } from "@src/atoms/queue.atom";
import type { StackScreenProps } from "@src/navigation";
import { ScreenKeys } from "@src/navigation/screens";

import {
	Anchor,
	Box,
	DividerLine,
	Text,
	ScreenContainer,
	ListView,
} from "@src/components";
import { getCopy } from "@src/utils/getCopy";

import {
	Menu as DataMenu,
	MenuCombo,
	type MenuSkuConfig,
	MenuSkuMap,
	type MenuKey,
} from "@data/menu";

import MenuItem from "./components/MenuItem";
import { CheckoutBanner } from "./components/CheckoutBanner";
import { ComboCard } from "./components/ComboCard";

export interface MenuScreenParams {
	activeMenu?: MenuKey;
}

export interface MenuProps
	extends StackScreenProps<typeof ScreenKeys.Menu>,
		MenuScreenParams {}

const Menu = ({
	navigation,
	route: {
		params: { activeMenu = DataMenu.Main } = {},
	},
}: MenuProps) => {
	const activeItemSetter = useAtomSetter(activeItemAtom);
	const queueSetter = useAtomSetter(queueAtom);

	const menuConfig = MenuSkuMap[activeMenu];

	const subMenus = Object.keys(MenuSkuMap).filter(
		(menu) => menu !== DataMenu.Main,
	) as MenuKey[];

	return (
		<ScreenContainer Footer={<CheckoutBanner navigation={navigation} />}>
			{activeMenu === DataMenu.Main && (
				<Box gap="m" paddingBottom="l">
					<Text variant="boldItalic" textAlign="center">
						{"Ordering as easy as"}
					</Text>
					<Box flexDirection="row" gap="s">
						<ComboCard
							navigation={navigation}
							comboKey={MenuCombo.DblDblCombo}
							index={1}
						/>
						<ComboCard
							navigation={navigation}
							comboKey={MenuCombo.CheeseburgerCombo}
							index={2}
						/>
						<ComboCard
							navigation={navigation}
							comboKey={MenuCombo.HamburgerCombo}
							index={3}
						/>
					</Box>
				</Box>
			)}
			<ListView
				data={menuConfig.items as readonly MenuSkuConfig[]}
				SeparatorComponent={DividerLine}
				renderItem={(item) => (
					<MenuItem
						id={item.sku}
						supertext={"supertext" in item ? item.supertext : undefined}
						subtext={"subtext" in item ? item.subtext : undefined}
						onPress={() => {
							activeItemSetter.setDefaultItem(item);
							queueSetter.updateIndex(0);
							navigation.push(ScreenKeys.Item, {
								title: getCopy(item.sku.replace("Combo", "")),
							});
						}}
					/>
				)}
			/>
			{activeMenu === DataMenu.Main && (
				<React.Fragment>
					<DividerLine />
					<ListView
						data={subMenus}
						SeparatorComponent={DividerLine}
						renderItem={(menu) => {
							const menuConfig = MenuSkuMap[menu];
							return (
								<MenuItem
									id={menu}
									supertext={
										"supertext" in menuConfig ? menuConfig.supertext : undefined
									}
									onPress={() => {
										navigation.push(ScreenKeys.Menu, {
											title: getCopy(menu),
											activeMenu: menu,
										});
									}}
								/>
							);
						}}
					/>
				</React.Fragment>
			)}
			<Text marginTop="s">
				{
					"2,000 calories a day is used for general nutrition advice, but calorie needs vary, Additional nutritional information is available upon request. More details can be found on the "
				}
				<Anchor href="https://www.in-n-out.com/menu/nutrition-info">
					<Text>{"In-n-Out Website"}</Text>
				</Anchor>
				{"."}
			</Text>
		</ScreenContainer>
	);
};

export default Menu;
