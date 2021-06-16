import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, ProfilePage, HelpButton, HelpPage, CountPage } from './src';
import { StackNavigatorParams } from './src/types';

const Stack = createStackNavigator<StackNavigatorParams>();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={HomePage} />
        <Stack.Screen name="PROFILE" component={ProfilePage} />
        <Stack.Screen
          name="HELP"
          component={HelpPage}
          options={{ headerRight: HelpButton }}
        />
        <Stack.Screen name="COUNT" component={CountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
