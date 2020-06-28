import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badge from '../pages/Bages';
import BadgeNew from '../pages/Register';
import BadgeEdit from '../pages/BadgeEdit';
import Layout from './Layout';
import NotFound from './NotFound';
import Home from '../pages/Home';
import BadgeDetails from '../pages/BadgeDetailsContainer';
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badge} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
