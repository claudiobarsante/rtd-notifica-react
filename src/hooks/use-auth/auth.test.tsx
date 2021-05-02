import { act, renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth, AuthProviderProps } from '.';
import { ToastProvider } from 'react-toast-notifications';
import { CurrentUser } from 'models/User';

describe('useAuth', () => {
	it('should return AuthState if it exists', () => {
		const hj = new Date('2021-01-01');
		const user = new CurrentUser('teste', 1, 1, 'userId', 'userName', true, hj);
		const wrapper = ({ children }: AuthProviderProps) => (
			<ToastProvider autoDismiss transitionDuration={400}>
				<AuthProvider>{children}</AuthProvider>;
			</ToastProvider>
		);

		//?Rendering the useAuth hook inside <AutoProvider/> to accesss their properties and functions
		const { result } = renderHook(() => useAuth(), {
			wrapper,
		});
		act(() => {
			result.current.setUser({
				user,
				token: 'teste',
			});
		});

		// act(() => {
		// 	result.current.tryToSignIn({ email: 'user@demo.com.br', password: 'Demo@2020' });
		// });
		expect(result.current.currentUser).toMatchObject({
			nickname: 'teste',
			institucionalId: 1,
			oficioId: 1,
			userId: 'userId',
			userName: 'userName',
			expirationDate: hj,
			isAuthenticated: true,
		});
		//expect(result.current.tryToSignIn).toHaveBeenCalled();
		//expect(result.current.tryToSignIn).toHaveBeenCalledTimes(1);
	});
});
