import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid black;
  //margin-bottom: 10rem;
  //overflow: hidden;
  background-color: white;
  width: 100%;
  top: 0;
  height: 10rem;
`;

export const MenuContainer = styled.section`
  display: flex;
  position: fixed;
  right: 0;
  height: inherit;
  // border: 1px solid orange;
`;
export const Menu = styled.ul`
  list-style-type: none;
  padding: 2rem;
`;
