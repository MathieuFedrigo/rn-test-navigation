import { Button, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export const CountPage: FC = () => {
  const { navigate } = useNavigation();
  const onPress = () => navigate('PROFILE');

  const [pageViewsCount, setPageViewsCount] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      setPageViewsCount(pageViewsCount => pageViewsCount + 1);
    }, []),
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>The page views count is: {pageViewsCount}</Text>
      <Button onPress={onPress} title="Go to Profile" />
    </View>
  );
};
