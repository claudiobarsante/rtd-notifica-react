import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

type MenuItemProps = { isActive: boolean };

export const Item = styled.li<MenuItemProps>`
  display: inline-block;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 12rem;

    &:hover {
      border-bottom: 4px solid var(--color-accent);
    }

    ${props =>
      props.isActive &&
      css`
        border-bottom: 4px solid var(--color-accent);
      `}
  }

  span {
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  svg {
    color: var(--color-accent);
    flex-shrink: 0;
    margin-bottom: 1.5rem;

    height: 2.8rem;
    width: 2.8rem;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  span {
    color: var(--color-accent);
    &:hover {
      font-weight: bold;
    }
  }

  &:focus,
  &:hover,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;
