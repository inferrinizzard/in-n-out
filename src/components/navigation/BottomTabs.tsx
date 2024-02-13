import { useEffect, useState } from 'react';
import { StackActions, type NavigationState } from '@react-navigation/native';
import { BottomNavigation, Icon } from 'react-native-paper';

import { type ScreenKey, ScreenKeys, ScreenCopy } from '../../consts';
import { navigationRef } from '../../navigators/navigatorRef';

const tabsIcons: Record<string, string> = {
  [ScreenKeys.Menu]: 'silverware',
  [ScreenKeys.Cart]: 'cart-outline',
  [ScreenKeys.QrCode]: 'qrcode',
  [ScreenKeys.Account]: 'account',
  [ScreenKeys.More]: 'dots-horizontal',
};

export interface BottomTabsProps {}

export const BottomTabs: React.FC<BottomTabsProps> = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (navigationRef?.isReady()) {
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
          .filter((route) => route != ScreenKeys.Item)
          .map((route) => ({ key: route as ScreenKey })),
      }))(navigationRef.current!.getRootState())}
      onTabPress={({ route, preventDefault }) => {
        navigationRef.dispatch(StackActions.replace(route.key));
      }}
      renderIcon={({ route, focused, color }) => {
        const iconSource = tabsIcons[route.key];
        return <Icon source={iconSource} size={24} color={color} />;
      }}
      getLabelText={({ route }) => {
        return ScreenCopy[route.key];
      }}
    />
  );
};
