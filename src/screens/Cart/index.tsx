import { useMemo } from "react";
import { FlatList } from "react-native";
import { useAtom } from "jotai";

import type { StackScreenProps, ScreenKeys } from "@src/navigation";
import { orderAtom } from "@src/atoms/order.atom";
import { Box } from "@src/components";
import ScreenContainer from "@src/components/layout/ScreenContainer";

import CartItem from "./components/CartItem";
import CartLocation from "./components/CartLocation";
import { EmptyCart } from "./components/EmptyCart";
import { PriceTotal } from "./components/PriceTotal";

export interface CartProps extends StackScreenProps<typeof ScreenKeys.Cart> {}

const Cart = ({ navigation }: CartProps) => {
	const [order, getOrderSetter] = useAtom(orderAtom);
	const orderItems = useMemo(() => Object.entries(order), [order]);

	const cartBody = useMemo(() => {
		if (!orderItems.length) {
			return <EmptyCart navigation={navigation} />;
		}

		return (
			<FlatList
				data={orderItems}
				ItemSeparatorComponent={
					<Box backgroundColor="greyDark" style={{ height: 1 }} />
				}
				renderItem={({ item: [uuid, item] }) => (
					<CartItem key={uuid} uuid={uuid} {...item} />
				)}
			/>
		);
	}, [orderItems, navigation]);

	return (
		<ScreenContainer Header={<CartLocation />} Footer={<PriceTotal />}>
			<Box flexGrow={1}>{cartBody}</Box>
		</ScreenContainer>
	);
};

export default Cart;
