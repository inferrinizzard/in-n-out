import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { type HeaderTitleProps } from '@react-navigation/elements';

export interface HeaderProps extends HeaderTitleProps {}

const Header: React.FC<HeaderProps> = ({ tintColor, children }) => {
  return (
    <View>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{children}</Text>
    </View>
  );
};

export default Header;
