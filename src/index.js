import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './components/index';
import Place from './components/place';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise,thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
    		<Switch>
    			<Route path="/places/" component={Place} />
	    		<Route path="/" component={Index} />
	    	</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
