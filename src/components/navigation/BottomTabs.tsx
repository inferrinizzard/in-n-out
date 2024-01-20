import { useNavigation } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';
import { MenuStackNavigatorProps } from '../../navigators/MenuStack';

const baseTabsIcons: Record<string, string> = {
  TabMenu: 'silverware',
  TabCart: 'cart-outline',
  TabQrCode: 'qrcode',
  TabAccount: 'account',
  TabMore: 'dots-horizontal',
};

export interface BottomTabsProps {}

export const BottomTabs: React.FC<BottomTabsProps> = () => {
  const navigation = useNavigation();

  // if(navigation)

  // return null;

  return (
    <BottomNavigation.Bar
      navigationState={navigation.getState()}
      // safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        // const event = navigation.emit({
        //   type: 'Press',
        //   target: route.key,
        //   canPreventDefault: true,
        // });
        // if (event.defaultPrevented) {
        //   preventDefault();
        // } else {
        //   navigation.dispatch({
        //     ...CommonActions.navigate(route.name, route.params),
        //     target: state.key,
        //   });
        // }
      }}
      renderIcon={({ route, focused, color }) => {
        // const { options } = descriptors[route.key];
        // if (options.tabBarIcon) {
        //   return options.tabBarIcon({ focused, color, size: 24 });
        // }

        return null;
      }}
      getLabelText={({ route }) => {
        // const { options } = descriptors[route.key];
        // return options.tabBarLabel as string;

        return route.name;
      }}
    />
  );
};
