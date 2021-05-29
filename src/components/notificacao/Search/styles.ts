import styled from 'styled-components';
import { AiOutlineFileSearch } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 5.6rem;
  // width: 40rem;
  width: min(90%, 70.5rem);

  background: var(--grey);
  border-radius: 1rem;
  border: 2px solid var(--primary);
  color: var(--grey-hard);
  // margin-left: 22%;
  // padding: 16px;

  input {
    background: transparent;
    border: 0;
    color: var(--grey-hard);
    font-size: 1.8rem;
    margin: 0.2rem;
    outline: 0;
    flex-grow: 1;

    &::placeholder {
      color: var(--grey-hard);
    }
  }
`;

export const SearchIcon = styled(AiOutlineFileSearch)`
  color: var(--primary);
  margin-right: 1.6rem;

  height: 2.5rem;
  width: 2.5rem;
`;
