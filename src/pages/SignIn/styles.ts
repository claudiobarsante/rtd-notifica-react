import styled from 'styled-components';
import backgroundImg from '../../assets/FundoLogin.png';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #aacaff;

	height: 100vh;
	p {
		color: var(--error);
		font-size: 1.2rem;
	}
`;

export const SignIn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100rem;
	height: 50rem;
	border-radius: 1rem;
	background: white;
	overflow: hidden;
	//?shadow
	box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.3);
	}

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
		//background: #aacaff;
	}
	img {
		//border: 1px solid purple;
		max-height: 50rem;
		max-width: 55rem;
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	//background: url(${backgroundImg}) no-repeat;
	//background-size: contain;
	//background-position: center;
	//border: 1px solid green;
	//	border-radius: 1rem;
	//background: #aacaff;

	width: 50%;
	height: inherit;
	p {
		color: var(--error);
	}
	h1 {
		font-weight: 400;
		color: var(--grey-dark);
		margin-bottom: 3rem;
	}
	h2 {
		font-weight: 400;
		color: var(--grey-dark);
	}
`;
export const ActivityIndicatorContainer = styled.div`
	padding-top: 4rem;
	height: 4rem;
`;
