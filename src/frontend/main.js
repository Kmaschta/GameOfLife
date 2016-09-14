import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import Root from './app/Root';
import rootReducers from './app/reducers';
import configureStore from './app/configureStore';

const store = configureStore(rootReducers);

render(
    <Root {...{ store }} />,
    document.getElementById('root')
);
