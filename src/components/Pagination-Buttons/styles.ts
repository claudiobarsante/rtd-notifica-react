import styled from 'styled-components';
interface PageButtonProps {
	clicked: boolean;
}
export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ActionButton = styled.button`
	background: #fff;
	border: none;
	padding: 10px;
	color: blue;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
	margin: 0 10px;
	cursor: pointer;
`;

export const PageButton = styled.a<PageButtonProps>`
	background: ${({ clicked }: PageButtonProps) => (clicked ? 'yellow' : 'white')};
	//border: ${({ clicked }: PageButtonProps) => (clicked ? '2px solid red' : '2px solid #666')};
	border: ${({ clicked }: PageButtonProps) => (clicked ? '4px solid purple' : '4px solid green')};
	padding: 10px 15px;
	border-radius: 50%;
	height: 45px;
	width: 45px;
	position: relative;
	margin: 0 5px;
	cursor: pointer;

	&:hover {
		border: 4px solid blue;
		background: yellow;
	}

	span {
		position: absolute;
		top: 50%;
		left: 50%;
		color: ${({ clicked }: PageButtonProps) => (clicked ? 'yellow' : 'red')};
		//transform: translate(-50%, -50%);
	}
`;
