import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../components/error-boundary/index';
import Teste from '../pages/teste';

import ProtectedRoute from './ProtectedRoute';

const SignIn = lazy(() => import('../pages/sign-in/index'));
const Overview = lazy(() => import('../pages/overview/index'));

const index = () => {
	return (
		<Router>
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<div>...Loading</div>}>
						<Route path='/' exact component={SignIn} />
						<Route path='/teste' component={Teste} />
						<ProtectedRoute path='/overview' component={Overview} isProtected />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</Router>
	);
};

export default index;
