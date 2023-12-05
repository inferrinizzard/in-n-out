import { Button, Icon } from 'react-native-paper';
import { StackActions, useNavigation } from '@react-navigation/native';

import { type HeaderOptions } from '@react-navigation/elements';

export type HeaderButtonProps = Parameters<
  Exclude<HeaderOptions['headerLeft'], undefined>
>[0] & {};

const HeaderButton: React.FC<HeaderButtonProps> = () => {
  const navigation = useNavigation();

  const canPopStack = navigation.getState().routes.find((route) => route.state)
    ?.state?.index;

  if (!navigation.canGoBack() && !canPopStack) {
    return null;
  }

  return (
    <Button
      onPress={() =>
        canPopStack
          ? navigation.dispatch(StackActions.pop())
          : navigation.goBack()
      }
    >
      <Icon source="arrow-left" size={36} />
    </Button>
  );
};

export default HeaderButton;
