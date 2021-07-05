import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware, Epic, EpicMiddleware } from 'redux-observable';
import { counterEpic, counterReducer } from './counter';

const composeEnhancers = composeWithDevTools({
  trace: true,
});
const epicMiddleware: EpicMiddleware<Action> = createEpicMiddleware();
const middleware = [epicMiddleware];
const rootEpic = combineEpics(counterEpic);
const rootReducer = combineReducers({ counter: counterReducer });
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

epicMiddleware.run(rootEpic as Epic<Action, Action, void, unknown>);
