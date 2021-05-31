import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border: 0;

  height: 5.6rem;
  width: 5.6rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    color: var(--color-accent);

    height: 3rem;
    width: 3rem;
  }
`;
