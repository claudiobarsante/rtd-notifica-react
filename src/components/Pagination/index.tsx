import * as S from './styles';

import { Directions } from 'pages/Overview/logic';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import PaginationButton from './Button';

type Props = {
  totalPages: number;
  onClickDirection: (direction: Directions) => void;
  currentPage: number;
};

const PaginationActions = ({
  totalPages,
  onClickDirection,
  currentPage
}: Props) => {
  return (
    <S.Container>
      <PaginationButton
        icon={FaArrowCircleLeft}
        name="PreviousButton"
        tooltipPlacement="left"
        tooltip="Ir para página anterior"
        selectedDirection={onClickDirection}
        direction="Previous"
      />

      <span>{`${currentPage} de ${totalPages}`}</span>

      <PaginationButton
        icon={FaArrowCircleRight}
        name="NextButton"
        tooltipPlacement="right"
        tooltip="Ir para próxima página"
        selectedDirection={onClickDirection}
        direction="Next"
      />
    </S.Container>
  );
};

export default PaginationActions;
