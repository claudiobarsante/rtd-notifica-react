import styled from 'styled-components';
import backgroundImg from '../../assets/Background.png';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: -16rem;
	/* flex-direction: column;
	align-items: center;
	justify-content: center; */
	/* background: url(${backgroundImg}) no-repeat;
	background-size: contain;
	background-position: center; */
	height: 100vh;

	img {
		//	position: absolute;
		//top: -1.5rem;
		padding-top: 0;
		height: 40rem;
	}

	p {
		color: var(--error);
	}

	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
