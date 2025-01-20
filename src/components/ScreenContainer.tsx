import { type PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export interface AccountProps {}

const Account: React.FC<PropsWithChildren<AccountProps>> = ({ children }) => {
	return <View style={{ ...styles.padding }}>{children}</View>;
};

export default Account;

const styles = StyleSheet.create({
	padding: {
		paddingLeft: 20,
		paddingRight: 20,
	},
});
