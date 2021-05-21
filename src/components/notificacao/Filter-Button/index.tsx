import { FiFilter } from 'react-icons/fi';
import FilterCard from '../Filter-Card';
import * as S from './styles';
import { useState } from 'react';

const FilterButton = () => {
	const [showCard, setShowCard] = useState(true);
	return (
		<>
			<S.Container>
				<FiFilter />
			</S.Container>
			<FilterCard show={showCard} />
		</>
	);
};

export default FilterButton;
