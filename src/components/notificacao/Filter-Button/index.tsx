import { FiFilter } from 'react-icons/fi';
import FilterCard from '../Filter-Card';
import * as S from './styles';
import { useState } from 'react';

const FilterButton = () => {
	const [isCardVisible, setIsCardVisible] = useState(false);

	const handleHideCard = () => {
		setIsCardVisible(false);
	};

	return (
		<>
			<S.Container onClick={() => setIsCardVisible(true)}>
				<FiFilter />
			</S.Container>
			<FilterCard isVisible={isCardVisible} hideCard={handleHideCard} />
		</>
	);
};

export default FilterButton;
