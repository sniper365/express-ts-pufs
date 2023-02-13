import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import { Layout } from './components/layout/Layout'

export function Router() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/trade">
            <Home />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
