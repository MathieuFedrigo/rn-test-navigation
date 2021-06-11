import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { HomePage } from '../../Home.component';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
}));

it('navigates to profile page on button press', async () => {
  const { getByText } = render(<HomePage />);

  fireEvent.press(getByText('Go to profile'));

  expect(mockNavigate).toHaveBeenCalled();
});