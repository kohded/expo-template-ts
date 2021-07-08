import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { atom, useRecoilState } from 'recoil';

interface UseCounter {
  counter: number;
  handleDecrementPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  handleIncrementPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const counterAtom = atom({
  default: 0,
  key: 'counter',
});

export const useCounter = (): UseCounter => {
  const [counter, setCounter] = useRecoilState(counterAtom);

  return {
    counter,
    handleDecrementPress: () => setCounter(counter - 1),
    handleIncrementPress: () => setCounter(counter + 1),
  };
};
