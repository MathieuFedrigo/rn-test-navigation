import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackNavigatorParams = {
  HOME: undefined;
  PROFILE: undefined;
  HELP: { isHelpTextVisible: boolean } | undefined;
  COUNT: undefined;
};

export type Route<ScreenName extends keyof StackNavigatorParams> = RouteProp<
  StackNavigatorParams,
  ScreenName
>;

export type Navigation<ScreenName extends keyof StackNavigatorParams> =
  StackNavigationProp<StackNavigatorParams, ScreenName>;
