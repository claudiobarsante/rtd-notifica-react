import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	table {
		padding: 10rem 10rem;
	}
`;

export const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30rem;
	border: 1px solid black;
`;

export const StyledModal = Modal.styled`
display: flex;
justify-content: center;
align-items: center;
background-color:white;
//background-color: var(--background-modal);
height: 50rem;
width: 50rem;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 2rem;
	}
`;
