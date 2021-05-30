import styled, { css, keyframes } from 'styled-components';

type ContainerProps = {
  isVisible: boolean;
};

const appearFromRight = keyframes`
  from{
     right:-30rem;
  }
  to {
     right:2%;
  }
`;

export const Container = styled.div<ContainerProps>`
  background: var(--accent);
  opacity: 0.9;
  border-radius: 1rem;
  border:0
  height: 10rem;
  width: 27rem;
  position: fixed;
  top: 18rem;
  right: -30rem;
  z-index: 100;

  ${props =>
    props.isVisible &&
    css`
      animation: ${appearFromRight} 1s;
      right: 2%;
    `}
`;
export const OptionsContainer = styled.div``;
export const Options = styled.ul`
  list-style: none;
`;

export const CloseButton = styled.button`
  border: 0;

  color: white;
  background: transparent;
  border-radius: 1rem;
  margin-left: 88%;
  margin-top: 0.8rem;
  font-size: 2rem;
  padding: 0.3rem;

  transition: background-color 0.5s ease;

  &:hover {
    background-color: #637be9;
  }
  transition: color 0.2s;
`;

export const OptionButton = styled.button`
  color: white;
  background-color: transparent;
  border: 0;
  font-size: 1.3rem;
  padding: 0.7rem 1.3rem;
  width: 100%;
  text-align: left;

  transition: background-color 0.5s ease;

  &:hover {
    background-color: #637be9;

    &:after {
      content: '✔';
      margin-left: 0.5rem;
    }
  }

  &:last-child {
    margin-bottom: 0.7rem;
  }
`;
