import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  height: 10rem;
  width: 100%;

  top: 0;
`;

export const MenuContainer = styled.section`
  display: flex;
  height: inherit;
  position: fixed;
  right: 0;
`;
export const Menu = styled.ul`
  list-style-type: none;
  padding: 2rem;

  /** margin-left after the first MenuItem to avoid border bottom overlapping*/
  li + li {
    margin-left: 0.5rem;
  }
`;
