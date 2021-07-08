import { waitFor } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
// Note: react-test-renderer must be required after react-native.
import { create } from 'react-test-renderer';
import { App } from '../components/App/App';

jest.mock('react-native-screens', () => ({
  ...jest.requireActual('react-native-screens'),
  enableScreens: jest.fn(),
}));

test('renders correctly', async () => {
  await waitFor(() => create(<App />));
});
