import { Button, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { type HeaderOptions } from '@react-navigation/elements';

export type HeaderButtonProps = Parameters<
  Exclude<HeaderOptions['headerLeft'], undefined>
>[0];

const HeaderButton: React.FC<HeaderButtonProps> = () => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.goBack()}>
      <Icon source="arrow-left" size={36} />
    </Button>
  );
};

export default HeaderButton;
