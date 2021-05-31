import styled, { css } from 'styled-components';
import { AiOutlineFileText } from 'react-icons/ai';
import { CalendarClock } from '@styled-icons/fluentui-system-regular';

type DiasEmAtrasoCalendarProps = {
  isLate: boolean;
};

export const NotificacaoContainer = styled.div`
  background: white;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
  position: relative;

  height: 15rem;
  width: 40vw;
  // -- shadow
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const NotIcon = styled(AiOutlineFileText)`
  background: var(--color-success);
  border-radius: 50%;
  border: 0;
  color: white;

  height: 4rem;
  width: 4rem;

  padding: 0.6rem;
  position: absolute;
  top: -1.8rem;
`;
export const Body = styled.ul`
  max-width: inherit;
  height: inherit;
  list-style-type: none;
  padding: 3rem 2rem;

  li:first-child {
    padding-bottom: 0.7rem;
  }
`;

export const Protocolo = styled.li`
  color: var(--color-grey-dark);
  font-weight: 500;
`;

export const Nome = styled.li`
  color: var(--color-grey-hard);
  font-size: 1.4rem;
`;

export const Endereco = styled.li`
  color: var(--color-grey-hard);
  font-size: 1.4rem;
`;
export const DiasEmAtrasoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-top: 0.6rem;

  span {
    display: inline-flex;
    color: var(--color-grey-hard);
    font-size: 1.4rem;
    padding-left: 0.2rem;
  }
`;
export const DiasEmAtrasoCalendar = styled(
  CalendarClock
)<DiasEmAtrasoCalendarProps>`
  height: 2.5rem;
  widht: 2.5rem;

  ${props =>
    props.isLate &&
    css`
      color: var(--color-error);
    `}

  ${props =>
    !props.isLate &&
    css`
      color: var(--color-success);
    `}
`;
