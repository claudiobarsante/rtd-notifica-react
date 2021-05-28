import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 10fr 80fr 10fr;
  grid-template-columns: 50fr 50fr; //50fr means 50% of available space
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

  @media screen and (max-width: 1502px) {
    display: grid;
    grid-template-rows: 40fr 5fr 50fr 5fr;
    grid-template-columns: 100fr;
    grid-template-areas: 'image' 'search' 'list' 'pagination';
  }
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
  //flex-grow: 1;

  grid-area: image;

  img {
    height: 80rem;
    width: 80rem;
  }

  @media screen and (max-width: 1502px) {
    img {
      object-fit: contain;
      height: auto;
      width: auto;
    }
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
  grid-area: search;

  border: 3px solid red;
  padding: 1rem;
`;

export const Pagination = styled.div`
  grid-area: pagination;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
