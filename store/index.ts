import {createStore, AnyAction, applyMiddleware} from 'redux';
import {MakeStore, createWrapper, HYDRATE} from 'next-redux-wrapper';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from './rootReducer';
import arrLogic from './rootLogic';

const deps = {};

const logicMiddleware = createLogicMiddleware(arrLogic, deps);

const middleware = applyMiddleware(
  logicMiddleware
);

// create a makeStore function
const makeStore = () => createStore(rootReducer, {}, middleware);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});