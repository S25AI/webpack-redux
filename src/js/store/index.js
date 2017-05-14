'use strict';

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import logger from '../enhancers/logger';
import thunk from '../enhancers/thunkMiddleware';

let appliedLogger = applyMiddleware(logger);
let appliedThunk = applyMiddleware(thunk);

const store = createStore(rootReducer, appliedLogger, appliedThunk);

export default store;