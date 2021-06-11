import { Button, Text, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

export const ProfilePage: FC = () => {
  const { goBack } = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Page</Text>
      <Button onPress={goBack} title="Go back" />
    </View>
  );
};
