import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import Login from './components/login';
import TicketBook from './components/ticket_book';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/ticketbook" component={TicketBook} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
