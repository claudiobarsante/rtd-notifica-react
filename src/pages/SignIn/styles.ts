import styled from 'styled-components';
import backgroundImg from '../../assets/Background.png';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	//align-items: center;
	//margin-top: -16rem;
	/* flex-direction: column;
	align-items: center;
	justify-content: center; */
	/* background: url(${backgroundImg}) no-repeat;
	background-size: contain;
	background-position: center; */
	height: 100vh;
	//margin-top: 10rem;
	/* width: 120rem;
	height: 50rem;
	border: 1px solid red;
	background: white;

	img {
		//	position: absolute;
		//top: -1.5rem;
		padding-top: 0;
		height: 40rem;
	}

	p {
		color: var(--error);
	} */

	/* > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */
`;

export const SignIn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100rem;
	height: 50rem;
	border-radius: 1rem;
	background: white;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100vw;
		height: 100vh;
	}
`;

export const Art = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: inherit;

	padding: 1.5rem;

	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;

		border-radius: 1rem;
		background: #0099ff;
	}
	img {
		//border: 1px solid purple;
		height: 30rem;
		width: 30rem;
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	//border: 1px solid green;
	width: 50%;
	height: inherit;
`;
