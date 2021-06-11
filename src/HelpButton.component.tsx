import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export const HelpButton: FC<{ tintColor?: string | undefined }> = () => {
  const { setParams } = useNavigation();
  const onPress = () => setParams({ isHelpTextVisible: true });

  return <Button onPress={onPress} title={'HelpButton'} />;
};
