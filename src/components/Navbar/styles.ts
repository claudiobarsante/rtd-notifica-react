import styled, { css } from 'styled-components';
import { IoPin } from 'react-icons/io5';
export const Container = styled.div`
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
  width: 2.4rem;
  height: 2.4rem;
  fill: var(--primary);
  // flex-shrink: 0;
`;
export const PinIcon = styled(IoPin)`
  ${iconCss}
`;
