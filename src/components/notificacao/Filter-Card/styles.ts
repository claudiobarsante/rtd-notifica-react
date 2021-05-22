import styled, { css, keyframes } from 'styled-components';

type ContainerProps = {
	isVisible: boolean;
};

const appearFromRight = keyframes`
  from{
     right:0%
  }
  to {
     right:10%;
  }
`;

export const Container = styled.div<ContainerProps>`
	background: orange;
	height: 10rem;
	width: 10rem;
	position: absolute;
	top: 18rem;
	right: 0%;
	z-index: 100;

	${props =>
		props.isVisible &&
		css`
			animation: ${appearFromRight} 1s;
			right: 10%;
		`}
`;
export const OptionsContainer = styled.div``;
export const Options = styled.ul`
	list-style: none;
`;
