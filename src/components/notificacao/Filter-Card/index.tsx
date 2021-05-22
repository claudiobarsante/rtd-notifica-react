import * as S from './styles';
import { useState } from 'react';

type Props = {
	isVisible: boolean;
	hideCard: () => void;
};
const FilterCard = ({ isVisible, hideCard }: Props) => {
	return (
		<S.Container isVisible={isVisible}>
			<button onClick={hideCard}>Fechar</button>
			<S.Options>
				<li>Todas</li>
				<li>Em diligência com menos de 15 dias</li>
				<li>Em diligência com mais de 15 dias</li>
			</S.Options>
		</S.Container>
	);
};

export default FilterCard;
