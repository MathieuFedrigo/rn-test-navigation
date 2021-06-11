import { Button, Text, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

export const HomePage: FC = () => {
  const { navigate } = useNavigation();
  const goToProfile = () => navigate('PROFILE');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
      <Button onPress={goToProfile} title="Go to profile" />
    </View>
  );
};
