import { Redirect } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
//Types
import { Credentials } from '../../store/auth/types';
import { State } from '../../store/configureStore';
//Saga actions
import { signInRequest } from '../../store/auth/actions';
//Styles
import * as S from './styles';
import Button from '../../components/button';
import Input from '../../components/input';

import rtdNotificaImg from '../../assets/rtd-notifica.png';

const SignInSchema = yup.object().shape({
	email: yup
		.string()
		.required('E-mail é um campo obrigatório')
		.email('Por favor, informe um e-mail válido'),
	password: yup.string().required('Senha é um campo obrigatório'),
});

const SignIn = () => {
	const { register, handleSubmit, errors } = useForm<Credentials>({
		resolver: yupResolver(SignInSchema),
		mode: 'onBlur',
	});

	const isAuthenticated = useSelector<State, boolean>(state => state.auth.isAuthenticated);

	const dispatch = useDispatch();

	const submitForm = async ({ email, password }: Credentials) => {
		dispatch(signInRequest({ email, password }));
	};

	if (isAuthenticated) {
		return <Redirect to='/overview' />;
	}

	return (
		<S.Container>
			<div>
				<img src={rtdNotificaImg} alt='Logo da aplicação RtdNotifica App' />

				<form onSubmit={handleSubmit(submitForm)}>
					<ErrorMessage
						name='email'
						errors={errors}
						render={({ message }) => <p id='test-email-error'>{message}</p>}
					/>
					<Input
						id='email'
						name='email'
						type='text'
						placeholder='E-mail do usuário'
						inputRef={register}
						error={errors.email?.message}
						icon={AiOutlineUser}
					/>

					<ErrorMessage
						name='password'
						errors={errors}
						render={({ message }) => <p id='test-password-error'>{message}</p>}
					/>
					<Input
						id='password'
						name='password'
						type='password'
						placeholder='Senha do usuário'
						inputRef={register}
						error={errors.password?.message}
						icon={AiOutlineLock}
					/>

					<Button type='submit'>Entrar</Button>
				</form>
			</div>
		</S.Container>
	);
};

export default SignIn;
