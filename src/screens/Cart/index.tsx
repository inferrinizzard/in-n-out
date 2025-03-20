import { useMemo } from "react";
import { useAtomValue } from "jotai";

import type { StackScreenProps } from "@src/navigation";
import type { ScreenKeys } from "@src/navigation/screens";
import { orderAtom } from "@src/atoms/order.atom";
import { Box, DividerLine, ListView, ScreenContainer } from "@src/components";

import CartItem from "./components/CartItem";
import CartLocation from "./components/CartLocation";
import { EmptyCart } from "./components/EmptyCart";
import { PriceTotal } from "./components/PriceTotal";

export interface CartProps extends StackScreenProps<typeof ScreenKeys.Cart> {}

const Cart = ({ navigation }: CartProps) => {
	const order = useAtomValue(orderAtom);

	const orderItems = useMemo(() => Object.entries(order), [order]);

	const cartBody = useMemo(() => {
		if (!orderItems.length) {
			return <EmptyCart navigation={navigation} />;
		}

		return (
			<ListView
				data={orderItems}
				SeparatorComponent={DividerLine}
				renderItem={([uuid, item]) => (
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
