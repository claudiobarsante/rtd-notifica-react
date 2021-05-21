import styled, { css, keyframes } from 'styled-components';

type ContainerProps = {
	mostrar: boolean;
};

const appearFromRight = keyframes`
  from {
     transform: translateX(-5rem);
  }
  to {
     transform: translateX(10rem);
  }
`;

export const Container = styled.div<ContainerProps>`
	background: orange;
	height: 10rem;
	width: 10rem;
	position: absolute;
	top: 18rem;
	right: -5rem;

	${props =>
		props.mostrar &&
		css`
			animation: ${appearFromRight} 1s;
		`}
`;
