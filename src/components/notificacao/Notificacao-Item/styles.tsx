import styled from 'styled-components';

export const NotificacaoContainer = styled.div`
	width: 60rem;
	height: 10rem;
	border-radius: 1rem;
	background: white;
	margin-bottom: 2rem;
	//?shadow
	box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
	}
`;
