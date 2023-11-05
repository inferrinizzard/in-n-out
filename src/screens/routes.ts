import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Details, { type DetailsProps } from './Details';
import Home, { type HomeProps } from './Home';

const routes = {
  Home: Home,
  Details: Details,
} as const;

export default routes;

export type RootStackParamList = {
  Home?: HomeProps;
  Details?: DetailsProps;
};

export type RootStackScreenProps = NativeStackScreenProps<RootStackParamList>;
export type StackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
