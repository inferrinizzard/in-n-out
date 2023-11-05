import {
  DefaultTheme,
  type Theme as NavigationTheme,
} from '@react-navigation/native';
import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export const navigationTheme: NavigationTheme = DefaultTheme;
