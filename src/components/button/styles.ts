import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 5.6rem;
	border-radius: 1rem;
	border: 0;
	background: var(--primary);
	color: var(--white);
	font-weight: 500;
	margin-top: 2.4rem;

	letter-spacing: 0.2rem;
	padding: 3rem;
	text-align: center;
	font-size: 2rem;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}
`;
