import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Hello from './containers/hello';
import store from './store';

export default class TypescriptStarter extends Component {

  render() {
    return (
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  }
}