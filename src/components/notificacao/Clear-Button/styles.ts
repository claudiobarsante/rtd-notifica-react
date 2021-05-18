import styled from 'styled-components';

export const Container = styled.button`
	height: 5.6rem;
	width: 5.6rem;
	background: var(--purple);
	border-radius: 1rem;
	margin-left: 2rem;
	//outline: 0;
	border: 0;

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
