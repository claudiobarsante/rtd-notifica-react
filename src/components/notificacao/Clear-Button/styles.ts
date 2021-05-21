import styled from 'styled-components';

export const Container = styled.button`
	background: var(--purple);
	border-radius: 1rem;
	border: 0;
	margin-left: 2rem;

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
