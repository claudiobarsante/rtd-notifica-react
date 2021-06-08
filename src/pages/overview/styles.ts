import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 10% 85% 5%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image search' 'image list' 'image pagination';
  //border: 3px solid lightgrey;
  // justify-items: center;
  //align-items: center;
  //justify-items - aligns items inside the grid horizontaly
  //?default value it's strech and full fill all the content of the cell
  //align-items - aligns items inside the grid vertically

  //column-gap: 10rem;
  justify-content: center; //align the entire grid horizontaly
  align-content: center; //align the entire grid vertically
`;

export const Left = styled.figure`
  justify-items: center; // -- aligns items inside the grid horizontaly
  align-items: center; // -- aligns items inside the grid vertically

  grid-area: image;

  img {
    height: 80vh;
    width: 100%; //for the image to be reponse just set width to 100% of the available space
    object-fit: contain;
    padding: 0 1.5rem;
  }

  // border: 1px solid green;
`;
export const Right = styled.div`
  justify-items: center;
  align-items: center;

  grid-area: list;
  padding: 1.5rem 2rem;
  width: 100%;
`;
export const TopRight = styled.section`
  justify-items: center;
  grid-area: search;

  //border: 3px solid red;
`;

export const SearchAndFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  //border: 2px solid green;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0 1.6rem;
`;

export const Pagination = styled.footer`
  justify-items: center;
  align-items: center;

  grid-area: pagination;
`;
