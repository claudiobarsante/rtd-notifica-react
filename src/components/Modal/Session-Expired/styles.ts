import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
display: flex;
justify-content: center;
align-items: center;

background-color:white;
border-radius:10px;

height: 50rem;
width: 50rem; 
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  text-align: center;

  h2 {
    color: var(--grey-dark);
  }

  h4 {
    color: var(--grey-hard);
    padding: 2rem;
  }

  button {
    background: var(--purple);
    border-radius: 1rem;
    border: 0;
    color: white;
    padding: 1.7rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
