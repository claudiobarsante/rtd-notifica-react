import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary/index';
import Teste from 'pages/teste';

import ProtectedRoute from './ProtectedRoute';

const SignIn = lazy(() => import('../pages/SignIn/index'));
const Overview = lazy(() => import('../pages/Overview/index'));
const MapDistribution = lazy(() => import('../pages/Map-Distribution'));

const index = () => {
  return (
    <Router>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<div>...Loading</div>}>
            <Route path="/" exact component={SignIn} />
            <Route path="/teste" component={Teste} />
            <ProtectedRoute path="/overview" component={Overview} isProtected />
            <ProtectedRoute
              path="/distribution"
              component={MapDistribution}
              isProtected
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Router>
  );
};

export default index;
