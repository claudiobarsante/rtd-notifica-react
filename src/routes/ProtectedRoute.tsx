import { Route, RouteProps, Redirect } from 'react-router-dom';
import React from 'react';
import { useAuth } from 'hooks/use-auth';
import Navbar from 'components/Navbar';
interface Props extends RouteProps {
	isProtected?: boolean;
	component: React.ComponentType;
}
const ProtectedRoute = ({ isProtected = false, component: Component, ...rest }: Props) => {
	const { currentUser } = useAuth();
	const isAuthenticated = currentUser?.isAuthenticated;

	return (
		<Route
			{...rest}
			render={props => {
				if (
					(isAuthenticated && isProtected) ||
					(!isAuthenticated && !isProtected) ||
					(isAuthenticated && !isProtected)
				) {
					return (
						<>
							<Navbar />
							<Component />
						</>
					);
				} else if (!isAuthenticated && isProtected) {
					return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;
