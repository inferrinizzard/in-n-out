import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomNavigation, Icon } from 'react-native-paper';

import { StackParamList } from '../../navigators/StackNavigator';

const tabsIcons: Record<string, string> = {
  Menu: 'silverware',
  Cart: 'cart-outline',
  QrCode: 'qrcode',
  Account: 'account',
  More: 'dots-horizontal',
};

export interface BottomTabsProps {}

export const BottomTabs: React.FC<BottomTabsProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const navigationState = navigation.getState();
  const navigationRoutes = navigationState.routeNames
    .filter((route) => route != 'Item')
    .map((route) => ({ key: route }));

  return (
    <BottomNavigation.Bar
      navigationState={{
        index: navigationState.index,
        routes: navigationRoutes,
      }}
      // safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        navigation.replace(route.key);
      }}
      renderIcon={({ route, focused, color }) => {
        const iconSource = tabsIcons[route.key];
        return <Icon source={iconSource} size={24} color={color} />;
      }}
      getLabelText={({ route }) => {
        return route.key;
      }}
    />
  );
};
