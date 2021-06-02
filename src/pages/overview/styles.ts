import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 10% 85% 5%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image search' 'image list' 'image pagination';
  border: 3px solid lightgrey;
  // justify-items: center;
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
export const Left = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-area: image;

  img {
    height: 80vh;
    width: 100%; //for the image to be reponse just set width to 100% of the available space
    object-fit: contain;
    padding: 0 1.5rem;
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
  padding: 1.5rem 2rem;
  width: 100%;
`;
export const TopRight = styled.section`
  display: flex;
  align-items: center;
  grid-area: search;

  border: 3px solid red;
`;

export const SearchAndFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-primary);
  width: 100%;
  padding: 0 1.6rem;
`;

export const Pagination = styled.footer`
  grid-area: pagination;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
