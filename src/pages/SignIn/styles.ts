import styled from 'styled-components';
import backgroundImg from 'assets/FundoLogin.png';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #aacaff;

  height: 100vh;

  p {
    color: var(--color-error);
    font-size: 1.2rem;
  }
`;

export const SignIn = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50rem;
  max-width: 100rem;

  background: white;
  border-radius: 1rem;
  overflow: hidden;
  //?shadow
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 921px) {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export const Picture = styled.picture`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: inherit;
  width: 50%;

  padding: 1.5rem;

  img {
    height: 50rem;
    width: 55rem;
  }
`;

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: inherit;
  width: 50%;

  p {
    color: var(--color-error);
  }

  h1 {
    color: var(--color-grey-dark);
    font-weight: 400;
    margin-bottom: 3rem;
  }

  h2 {
    color: var(--color-grey-dark);
    font-weight: 400;
  }
`;
export const ActivityIndicatorContainer = styled.div`
  padding-top: 4rem;
  height: 4rem;
`;
