import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../store/configureStore';
import React from 'react';

interface Props extends RouteProps {
	isProtected?: boolean;
	component: React.ComponentType;
}
const ProtectedRoute = ({ isProtected = false, component: Component, ...rest }: Props) => {
	const isAuthenticated = useSelector<State, boolean>(state => state.auth.isAuthenticated);

	return (
		<Route
			{...rest}
			render={props => {
				if (
					(isAuthenticated && isProtected) ||
					(!isAuthenticated && !isProtected) ||
					(isAuthenticated && !isProtected)
				) {
					return <Component />;
				} else if (!isAuthenticated && isProtected) {
					return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;
