import styled, { css } from 'styled-components';

type ContainerProps = {
  isFocused: boolean;
  isErrored: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 5.6rem;
  background: var(--color-grey);
  border-radius: 1rem;
  border: 2px solid var(--color-grey);
  padding: 16px;
  color: var(--color-grey-hard);

  display: flex;
  align-items: center;
  margin-top: 1.9rem;

  ${props =>
    props.isFocused &&
    css`
      border: 1px solid var(--color-primary);
      transition: border-color 2s, color 2s;
    `}

  ${props =>
    props.isErrored &&
    css`
      border: 1px solid var(--color-error);
      transition: border-color 2s, color 2s;
    `}  
    

  input {
    background: transparent;
    border: 0;
    outline: 0;
    color: var(--color-grey-hard);
    font-size: 1.8rem;
    margin: 0.2rem;

    &::placeholder {
      color: var(--color-grey-hard);
    }
  }

  svg {
    margin-right: 1.6rem;
    color: var(--color-primary);
  }
`;
