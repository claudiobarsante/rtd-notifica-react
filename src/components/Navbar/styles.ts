import styled, { css } from 'styled-components';
import { IoPin } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';
import {
  AiOutlineLineChart,
  AiOutlineHome,
  AiOutlineFileDone
} from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';

type MenuItemProps = { isActive: boolean };
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

const iconCss = css`
  width: 2.8rem;
  height: 2.8rem;
  color: var(--color-accent);
  flex-shrink: 0;
  margin-bottom: 3rem;
`;
export const MapIcon = styled(FiMapPin)`
  ${iconCss}
`;

export const ChartIcon = styled(AiOutlineLineChart)`
  ${iconCss}
`;

export const HomeIcon = styled(AiOutlineHome)`
  ${iconCss}
`;

export const AboutIcon = styled(AiOutlineFileDone)`
  ${iconCss}
`;

export const ExitIcon = styled(BiExit)`
  ${iconCss}
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

export const MenuItem = styled.li<MenuItemProps>`
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
