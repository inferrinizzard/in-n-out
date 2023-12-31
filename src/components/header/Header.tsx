import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { type HeaderTitleProps } from '@react-navigation/elements';
import {
  getFocusedRouteNameFromRoute,
  useRoute,
} from '@react-navigation/native';

export interface HeaderProps extends HeaderTitleProps {}

const Header: React.FC<HeaderProps> = ({ tintColor, children }) => {
  const route = useRoute();

  const focusedRouteName = getFocusedRouteNameFromRoute(route);

  return (
    <View>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>
        {focusedRouteName || children}
      </Text>
    </View>
  );
};

export default Header;
