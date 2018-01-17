/*
 * Revision History:
 *     Initial: 2018/01/16    Xu Jixin
 */

import React from 'react';

import dva from './patch/dva';
import Router from './router';
import { Models } from './models';

const app = dva({
  initialState: {},
  models: Models,
  onError() {},
});

const application = app.start(<Router />);

export default application;
