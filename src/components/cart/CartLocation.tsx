import { Image, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export interface CartLocationProps {}

const CartLocation: React.FC<CartLocationProps> = () => {
	return (
		<Card>
			<Card.Content style={{ display: "flex", flexDirection: "row" }}>
				<Image
					source={{
						uri: "https://s3-alpha-sig.figma.com/img/58f5/ccfb/e752d64714687a06b3060f78772ed13e?Expires=1702252800&Signature=hzMMNaaR3G0QOf9HcKkfmZv1lkCcXQi7tnwsa0ooVX7dZWCJGt-pTJb31k45zOpABA6UAzJTVGcgmmzPJVLMWwzdiQgaGRgc5tHqWbcII2u2i-AZNQHQH6uix452~E6Wqqq3w~9o0Jf1swtIboMSsfUzx6H1VuPYNpsh4DimeOiZ7zTJMtYOL2VbOFBO16msncfgn4wNQVngnBQUXB637Hgxw7vqyZXYRK3dn4l-gzIOsfnx1JTgBC5fauMkEoalYH2qvTakozzzQ3wf92hTXpemUO8x2eRyfTzFwK-BWi6Q4Wr9lDyxuZw6tpQy4DbVbB2qeU02U7tZoAhS4ilKxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
						height: 60,
						width: 80,
					}}
				/>
				<View style={{ flexGrow: 1 }}>
					<Text>{"Pickup"}</Text>
					<Text>{"1590 Foothill Blvd"}</Text>
					<Text>{"Closes at 1am"}</Text>
				</View>
				<Button>
					<Text>{"Change"}</Text>
				</Button>
			</Card.Content>
		</Card>
	);
};

export default CartLocation;
