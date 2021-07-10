import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

//Types
import { Credentials } from 'hooks/use-auth';

//Styles
import * as S from './styles';
import Button from 'components/Button';
import Input from 'components/Input';

import splashImg from 'assets/splash.png';
import { useAuth } from 'hooks/use-auth';

import { Redirect } from 'react-router-dom';
import ActivityIndicator from 'components/Activity-Indicator';

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail é um campo obrigatório')
    .email('Por favor, informe um e-mail válido'),
  password: yup.string().required('Senha é um campo obrigatório')
});

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm<Credentials>({
    resolver: yupResolver(SignInSchema),
    mode: 'onBlur'
  });

  const { tryToSignIn, currentUser, isLoading, getUserFromLocalStorage } =
    useAuth();

  const submitForm = async ({ email, password }: Credentials) => {
    tryToSignIn({ email: 'user@demo.com.br', password: 'Demo@2020' });
  };

  useEffect(() => {
    getUserFromLocalStorage();
  }, [getUserFromLocalStorage]);

  if (currentUser?.isAuthenticated) {
    return <Redirect to="/overview" />;
  }

  return (
    <S.Container>
      <S.SignIn>
        <S.Picture>
          <img src={splashImg} alt="Logo da aplicação RtdNotifica App" />
        </S.Picture>
        <S.Form>
          <h1>RTDNOTIFICA</h1>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(submitForm)}>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="E-mail do usuário"
              inputRef={register}
              error={errors.email?.message}
              icon={AiOutlineUser}
              maxLength={50}
            />
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => <p id="test-email-error">{message}</p>}
            />

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Senha do usuário"
              inputRef={register}
              error={errors.password?.message}
              icon={AiOutlineLock}
              maxLength={20}
            />
            <ErrorMessage
              name="password"
              errors={errors}
              render={({ message }) => (
                <p id="test-password-error">{message}</p>
              )}
            />

            <Button type="submit">Entrar</Button>
          </form>
          <S.ActivityIndicatorContainer>
            {<ActivityIndicator isLoading={isLoading} />}
          </S.ActivityIndicatorContainer>
        </S.Form>
      </S.SignIn>
    </S.Container>
  );
};

export default SignIn;
