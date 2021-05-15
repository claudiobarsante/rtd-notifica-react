import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Container = styled.div`
	//height: 100vh;
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: 40fr 60fr; //50fr means 50% of available space
	grid-template-areas: 'topLeft topRight' 'image list';
	//border: 3px solid lightgrey;
	justify-items: center;
	align-items: center;
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
	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
	grid-area: image;

	img {
		height: 70rem;
		width: 70rem;
	}
`;
export const Right = styled.div`
	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
	grid-area: list;
	//border: 3px solid lightgrey;
	max-width: 100%;
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
