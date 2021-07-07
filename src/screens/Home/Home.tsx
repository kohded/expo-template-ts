import React from 'react';
import { Button, Text } from 'react-native';
import { Screen } from '../../components/Screen/Screen';
import { useCounter } from '../../store/counter';

export const Home = (): JSX.Element => {
  const { counter, handleDecrementPress, handleIncrementPress } = useCounter();

  return (
    <Screen>
      <Text>Positive Counter: {counter.count}</Text>
      <Button onPress={handleIncrementPress} title="+" />
      <Button onPress={handleDecrementPress} title="-" />
    </Screen>
  );
};
