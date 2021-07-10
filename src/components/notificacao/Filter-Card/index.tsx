import { Filter, Filters } from 'pages/Overview/logic';
import * as S from './styles';
import { IoClose } from 'react-icons/io5';

type Props = {
  isVisible: boolean;
  hideCard: () => void;
  filterNotificacoes: (filter: Filters) => void;
};
const FilterCard = ({ isVisible, hideCard, filterNotificacoes }: Props) => {
  return (
    <S.Container isVisible={isVisible}>
      <S.CloseButton onClick={hideCard}>
        <IoClose />
      </S.CloseButton>

      <S.Options>
        <li>
          <S.OptionButton onClick={() => filterNotificacoes(Filter.ALL)}>
            Todas notificações
          </S.OptionButton>
        </li>
        <li>
          <S.OptionButton onClick={() => filterNotificacoes(Filter.BEFORE)}>
            Em diligência com menos de 15 dias
          </S.OptionButton>
        </li>
        <li>
          <S.OptionButton onClick={() => filterNotificacoes(Filter.AFTER)}>
            Em diligência com mais de 15 dias
          </S.OptionButton>
        </li>
      </S.Options>
    </S.Container>
  );
};

export default FilterCard;
