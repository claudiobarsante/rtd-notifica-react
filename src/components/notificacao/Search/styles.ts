import styled from 'styled-components';
import { AiOutlineFileSearch, AiOutlineSearch } from 'react-icons/ai';

export const Container = styled.div`
	width: 40rem;
	height: 5.6rem;
	background: var(--grey);
	border-radius: 1rem;
	border: 2px solid var(--primary);
	padding: 16px;
	color: var(--grey-hard);

	display: flex;
	align-items: center;
	margin-left: 13rem;

	input {
		flex: 1;
		background: transparent;
		border: 0;
		outline: 0;
		color: var(--gray-hard);
		font-size: 1.8rem;
		margin: 0.2rem;

		&::placeholder {
			color: var(--gray-hard);
		}
	}
`;

export const SearchIcon = styled(AiOutlineFileSearch)`
	margin-right: 1.6rem;
	color: var(--primary);
	height: 2.5rem;
	width: 2.5rem;
`;
