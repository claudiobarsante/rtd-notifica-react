import styled from 'styled-components';

export const Button = styled.button`
  background: var(--accent);
  border-radius: 1rem;
  border: 3.5px solid var(--accent-light);
  margin-left: 2rem;
  //outline: 0;

  height: 5.6rem;
  width: 5.6rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    color: white;
    height: 2.5rem;
    width: 2.5rem;
  }
`;
