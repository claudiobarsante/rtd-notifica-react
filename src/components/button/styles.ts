import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
	width: 34rem;
	height: 5.6rem;
	border-radius: 1rem;
	border: 0;
	background: var(--purple);
	color: var(--white);
	font-weight: 500;
	margin-top: 2.4rem;
	transition: background-color 0.2s;
	letter-spacing: 0.2rem;
	padding: 1.8rem 2rem;
	font-size: 2rem;

	&:hover {
		background: ${shade(0.2, '#788EEC')};
	}
`;
