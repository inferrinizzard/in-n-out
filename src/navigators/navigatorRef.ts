import { createNavigationContainerRef } from '@react-navigation/native';

import { type StackParamList } from './StackNavigator';

export const navigationRef = createNavigationContainerRef<StackParamList>();
