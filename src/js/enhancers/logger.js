'use strict';

const css = 'color: darkcyan';

export default () => next => action => {
  console.log(`action.type is %c [${action.type}],`, css, 'action.payload is ', action.payload);
  return next(action);
};