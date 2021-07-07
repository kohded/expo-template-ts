import { waitFor } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';
// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { App } from '../components/App/App';
import { counterInitialState } from '../store/counter';

jest.mock('react-native-screens', () => ({
  ...jest.requireActual('react-native-screens'),
  enableScreens: jest.fn(),
}));

const mockStore = configureStore();

test('renders correctly', async () => {
  await waitFor(() =>
    create(
      <Provider store={mockStore({ counter: counterInitialState })}>
        <App />
      </Provider>
    )
  );
});
