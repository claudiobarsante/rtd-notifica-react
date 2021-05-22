import * as S from './styles';

type Props = {
	isVisible: boolean;
	hideCard: () => void;
	filterNotificacoes: (filter: 'all' | 'before' | 'after') => void;
};
const FilterCard = ({ isVisible, hideCard, filterNotificacoes }: Props) => {
	return (
		<S.Container isVisible={isVisible}>
			<button onClick={hideCard}>Fechar</button>
			<S.Options>
				<li>
					<button onClick={() => filterNotificacoes('all')}>Todas</button>
				</li>
				<li>
					<button onClick={() => filterNotificacoes('before')}>
						Em diligência com menos de 15 dias
					</button>
				</li>
				<li>
					<button onClick={() => filterNotificacoes('after')}>
						Em diligência com mais de 15 dias
					</button>
				</li>
			</S.Options>
		</S.Container>
	);
};

export default FilterCard;
