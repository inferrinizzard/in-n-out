import { useEffect, useState } from 'react';
import { StackActions, type NavigationState } from '@react-navigation/native';
import { BottomNavigation, Icon } from 'react-native-paper';

const tabsIcons: Record<string, string> = {
  Menu: 'silverware',
  Cart: 'cart-outline',
  QrCode: 'qrcode',
  Account: 'account',
  More: 'dots-horizontal',
};

import { navigationRef } from '../../../Main';

export interface BottomTabsProps {}

export const BottomTabs: React.FC<BottomTabsProps> = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (navigationRef.isReady()) {
      setIsReady(true);
    }
  }, [navigationRef]);

  if (!isReady) {
    return null;
  }

  return (
    <BottomNavigation.Bar
      navigationState={((state: NavigationState) => ({
        index: state.index,
        routes: state.routeNames
          .filter((route) => route != 'Item')
          .map((route) => ({ key: route })),
      }))(navigationRef.current!.getRootState())}
      onTabPress={({ route, preventDefault }) => {
        navigationRef.dispatch(StackActions.replace(route.key));
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
