import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';
import { actionEvent, actionTypes } from './helpers';

// Types
interface Counter {
  count: number;
}

interface UseCounter {
  counter: Counter;
  handleDecrementPress: () => void;
  handleIncrementPress: () => void;
}

// Epic
export const counterEpic = (action$: Observable<AnyAction>): Observable<AnyAction> =>
  action$.pipe(
    ofType(actionTypes.decremented),
    delay(500),
    mapTo(actionEvent(actionTypes.incremented))
  );

// Reducer
export const counterInitialState = { count: 0 };
export const counterReducer = (
  state: Counter = counterInitialState,
  action: ActionEvent & Counter
): Counter => {
  switch (action.type) {
    case actionTypes.decremented:
      return { count: state.count - 1 };
    case actionTypes.incremented:
      return { count: state.count + 1 };
    default:
      return counterInitialState;
  }
};

// Hook
export const useCounter = (): UseCounter => {
  const counter = useSelector((state: RootStateOrAny) => state.counter);
  const dispatch = useDispatch();

  return {
    counter,
    handleDecrementPress: () => dispatch(actionEvent(actionTypes.decremented)),
    handleIncrementPress: () => dispatch(actionEvent(actionTypes.incremented)),
  };
};
