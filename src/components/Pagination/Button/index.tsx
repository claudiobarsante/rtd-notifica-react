import * as S from './styles';
import ReactTooltip from 'react-tooltip';
import { IconBaseProps } from 'react-icons';
import { Direction } from 'pages/Overview/logic';

type Props = {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
  tooltip: string;
  tooltipPlacement: 'left' | 'right';
  direction: Direction.PREVIOUS | Direction.NEXT;
  selectedDirection: (direction: Direction.PREVIOUS | Direction.NEXT) => void;
};
const PaginationButton = ({
  icon: Icon,
  name,
  tooltip,
  tooltipPlacement,
  direction,
  selectedDirection
}: Props) => {
  return (
    <>
      <S.Button
        data-tip
        data-for={name}
        onClick={() => selectedDirection(direction)}
      >
        {Icon && <Icon />}
      </S.Button>
      <ReactTooltip
        id={name}
        place={tooltipPlacement}
        effect="float"
        type="success"
      >
        {tooltip}
      </ReactTooltip>
    </>
  );
};

export default PaginationButton;
