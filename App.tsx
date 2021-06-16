import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from './src/Home.component';
import { ProfilePage } from './src/Profile.component';
import { HelpButton } from './src/HelpButton.component';
import { HelpPage } from './src/Help.component';
import { CountPage } from './src/Count.component';
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
