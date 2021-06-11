import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from './src/Home.component';

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
