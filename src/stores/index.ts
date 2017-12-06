// Use require.context to require reducers automatically
// Ref: https://webpack.github.io/docs/context.html
// const context = require.context('./', false, /\.js$/);
// const keys = context.keys().filter(item => item !== './index.js');

import userStore from './user';
import commonStore from './common';
import chartStore from './chart';
import monitorStore from './monitor';

export const rootStores = {
  userStore,
  commonStore,
  chartStore,
  monitorStore,
};
export const Keys = {
  userStore: 'userStore',
  commonStore: 'commonStore',
  chartStore: 'chartStore',
  monitorStore: 'monitorStore',
};