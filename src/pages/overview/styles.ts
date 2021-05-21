import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Container = styled.div`
	//height: 100vh;
	display: grid;
	grid-template-rows: 10fr 90fr;
	grid-template-columns: 50fr 50fr; //50fr means 50% of available space
	grid-template-areas: 'topLeft topRight' 'image list';
	//border: 3px solid lightgrey;
	//justify-items: center;
	//align-items: center;
	//justify-items - aligns items inside the grid horizontaly
	//?default value it's strech and full fill all the content of the cell
	//align-items - aligns items inside the grid vertically

	//column-gap: 10rem;
	justify-content: center; //align the entire grid horizontaly
	align-content: center; //align the entire grid vertically
`;

// export const Title = styled.div`
// 	height: 5rem;
// 	grid-area: title; //to place the element on a specific area, this is the same as grid-column:1/ span 2
// `;
export const Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	grid-area: image;

	img {
		height: 75rem;
		width: 80rem;
	}
	border: 1px solid green;
`;
export const Right = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border: 3px solid lightgrey;

	grid-area: list;
	padding-top: 3rem;
	width: 100%;
`;
export const TopRight = styled.div`
	display: flex;
	grid-area: topRight;

	border: 3px solid red;
	padding: 1rem;
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
