import React from 'react';
import { Button, Text } from 'react-native';
import { Screen } from '../../components/Screen/Screen';
import { useCounter } from '../../store/counter';

export const Home = (): JSX.Element => {
  const { counter, handleDecrementClick, handleIncrementClick } = useCounter();

  return (
    <Screen>
      <Text>Positive Counter: {counter.count}</Text>
      <Button onPress={handleIncrementClick} title="+" />
      <Button onPress={handleDecrementClick} title="-" />
    </Screen>
  );
};
