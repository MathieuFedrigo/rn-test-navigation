import { Button, Text, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from './types';

export const HomePage: FC = () => {
  const { navigate } = useNavigation<Navigation<'HOME'>>();
  const goToProfile = () => navigate('PROFILE');
  const goToCount = () => navigate('COUNT');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
      <Button onPress={goToProfile} title="Go to profile" />
      <Button onPress={goToCount} title="Go to count page" />
    </View>
  );
};
