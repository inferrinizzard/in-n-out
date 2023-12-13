import { Button, Icon } from 'react-native-paper';
import { StackActions, useNavigation } from '@react-navigation/native';

import { useAppDispatch } from '../../redux/store';
import { popPending } from '../../redux/slices/orderSlice';

import { type HeaderOptions } from '@react-navigation/elements';

export type HeaderButtonProps = Parameters<
  Exclude<HeaderOptions['headerLeft'], undefined>
>[0] & {};

const HeaderButton: React.FC<HeaderButtonProps> = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const canPopStack = navigation.getState().routes.find((route) => route.state)
    ?.state?.index;

  if (!navigation.canGoBack() && !canPopStack) {
    return null;
  }

  return (
    <Button
      onPress={() => {
        if (canPopStack) {
          dispatch(popPending());
          navigation.dispatch(StackActions.pop());
        } else {
          navigation.goBack();
        }
      }}
    >
      <Icon source="arrow-left" size={36} />
    </Button>
  );
};

export default HeaderButton;
