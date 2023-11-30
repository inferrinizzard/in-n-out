import { StyleSheet, View } from 'react-native';
import { Icon, List, Text } from 'react-native-paper';

import { type TabScreenProps } from '../navigators/BottomTabs';

export interface AccountProps {}

const Account: React.FC<AccountProps & TabScreenProps<'TabAccount'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Account Screen</Text>
      <List.Section title="Welcome, <Name>">
        <List.Item
          title={'Settings'}
          left={() => <Icon source={'cog'} size={24} />}
          right={() => <Icon source={'chevron-right'} size={24} />}
        />
        <List.Item
          title={'Privacy'}
          left={() => <Icon source={'cog'} size={24} />}
          right={() => <Icon source={'chevron-right'} size={24} />}
        />
        <List.Item
          title={'Payment Methods'}
          left={() => <Icon source={'cog'} size={24} />}
          right={() => <Icon source={'chevron-right'} size={24} />}
        />
        <List.Item
          title={'Notifications'}
          left={() => <Icon source={'cog'} size={24} />}
          right={() => <Icon source={'chevron-right'} size={24} />}
        />
      </List.Section>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
