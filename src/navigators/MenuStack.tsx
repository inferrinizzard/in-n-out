import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAppDispatch } from '../redux/store';
import { clearActiveItem } from '../redux/slices/orderSlice';

import { type MenuStackParamList, menuStackRoutes } from '../screens/routes';

const Stack = createNativeStackNavigator<MenuStackParamList>();

export interface MenuStackNavigatorProps {}

const MenuStackNavigator: React.FC<MenuStackNavigatorProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <Stack.Navigator initialRouteName="Menu">
      {(
        Object.entries(menuStackRoutes) as [keyof typeof menuStackRoutes, any][]
      ).map(([screen, component]) => (
        <Stack.Screen
          key={screen}
          name={screen as keyof typeof menuStackRoutes}
          component={component}
          listeners={{
            beforeRemove: () => dispatch(clearActiveItem()),
          }}
          options={({ route }) => ({
            title:
              route.params && 'name' in route.params
                ? route.params.name
                : screen,
          })}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MenuStackNavigator;
