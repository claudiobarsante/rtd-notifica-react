import { FiFilter } from 'react-icons/fi';
import FilterCard from '../FilterCard';
import * as S from './styles';
import { useState } from 'react';
import React from 'react';
import { Filters } from 'pages/Overview/logic';

type Props = {
  onFilter: (filter: Filters) => void;
};
const FilterButton = ({ onFilter }: Props) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleHideCard = () => {
    setIsCardVisible(false);
  };

  return (
    <>
      <S.Container onClick={() => setIsCardVisible(true)}>
        <FiFilter />
      </S.Container>
      <FilterCard
        isVisible={isCardVisible}
        hideCard={handleHideCard}
        filterNotificacoes={onFilter}
      />
    </>
  );
};

export default React.memo(FilterButton);
