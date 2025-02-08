import { useMemo } from "react";
import { FlatList, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import { useAtom } from "jotai";

import { type StackScreenProps, ScreenKeys } from "@src/navigation";
import { orderAtom } from "@src/atoms/order.atom";
import ScreenContainer from "@src/components/layout/ScreenContainer";

import CartItem from "./components/CartItem";
import CartLocation from "./components/CartLocation";

export interface CartProps extends StackScreenProps<typeof ScreenKeys.Cart> {}

const Cart = ({ navigation }: CartProps) => {
	const [order, orderSetter] = useAtom(orderAtom);
	const orderItems = useMemo(() => Object.entries(order), [order]);

	return (
		<ScreenContainer>
			<CartLocation />

			<View style={{ flexGrow: 1, marginTop: 90 }}>
				{orderItems.length ? (
					<FlatList
						data={orderItems}
						renderItem={({ item: [uuid, item] }) => (
							<CartItem key={uuid} uuid={uuid} {...item} />
						)}
					/>
				) : (
					<View>
						<Text>{"No items in cart!"}</Text>
						<Button
							mode="contained"
							onPress={() => navigation.replace(ScreenKeys.Menu)}
						>
							<Text>{"Add items"}</Text>
						</Button>
					</View>
				)}
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
