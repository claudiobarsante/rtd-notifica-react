import styled, { css } from 'styled-components';
import { AiOutlineFileText } from 'react-icons/ai';

export const NotificacaoContainer = styled.div`
	max-width: 67rem;
	height: 15rem;
	border-radius: 1rem;
	background: white;
	margin-bottom: 2.5rem;
	//?shadow
	box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
	}
	position: relative;
`;

export const NotIcon = styled(AiOutlineFileText)`
	width: 4rem;
	height: 4rem;
	//fill: var(--icon);
	//flex-shrink: 0;
	border: 1px solid grey;
	border-radius: 50%;
	background: green;
	color: white;
	padding: 0.6rem;
	position: absolute;
	top: -1.8rem;
`;
export const Body = styled.ul`
	max-width: inherit;
	height: inherit;
	list-style-type: none;
	padding: 3rem 2rem;

	li:first-child {
		padding-bottom: 0.7rem;
	}
`;

export const Protocolo = styled.li`
	color: var(--grey-dark);
	font-weight: 500;
`;

export const Nome = styled.li`
	color: var(--grey-hard);
	font-size: 1.4rem;
`;

export const Endereco = styled.li`
	color: var(--grey-hard);
	font-size: 1.4rem;
`;
