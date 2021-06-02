import styled from 'styled-components';
import { AiOutlineFileSearch } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 5.6rem;
  width: 100%;

  background: var(--color-grey);
  border-radius: 1rem;
  border: 2px solid var(--color-primary);
  color: var(--color-grey-hard);

  input {
    background: transparent;
    border: 0;
    color: var(--color-grey-hard);
    font-size: 1.8rem;
    margin: 0.2rem;
    outline: 0;
    flex-grow: 1;

    &::placeholder {
      color: var(--color-grey-hard);
    }
  }
`;

export const SearchIcon = styled(AiOutlineFileSearch)`
  color: var(--color-primary);
  margin-right: 1.6rem;

  height: 2.5rem;
  width: 2.5rem;
`;
