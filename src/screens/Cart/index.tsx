import { useMemo } from "react";
import { FlatList, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import { useAtom } from "jotai";

import type { StackScreenProps, ScreenKeys } from "@src/navigation";
import { orderAtom } from "@src/atoms/order.atom";
import ScreenContainer from "@src/components/layout/ScreenContainer";

import CartItem from "./components/CartItem";
import CartLocation from "./components/CartLocation";
import { EmptyCart } from "./components/EmptyCart";

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
				renderItem={({ item: [uuid, item] }) => (
					<CartItem key={uuid} uuid={uuid} {...item} />
				)}
			/>
		);
	}, [orderItems, navigation]);

	return (
		<ScreenContainer>
			<CartLocation />

			<View style={{ flexGrow: 1, marginTop: 90 }}>
				{cartBody}
				{orderItems.length ? (
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							padding: 10,
						}}
					>
						<Text>{"Subtotal:"}</Text>
						<Text>{`$${Number(
							orderItems.reduce((sum, [_, item]) => +item.price + sum, 0),
						).toFixed(2)}`}</Text>
					</View>
				) : null}
			</View>

			{orderItems.length ? (
				<Button mode="contained">
					<Text>{"Review and Pay"}</Text>
				</Button>
			) : null}
		</ScreenContainer>
	);
};

export default Cart;
