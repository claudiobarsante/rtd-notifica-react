import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5.6rem;
  width: 100%;

  background: var(--primary);
  border-radius: 1rem;
  border: 0;
  color: var(--white);
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  margin-top: 2.4rem;
  padding: 3rem;
  text-align: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
