import { Container } from './styles';

type Props = {
	totalPages: number;
	//onPreviousClick: () => void;
	//onNextClick: () => void;
	onClickDirection: (direction: 'previous' | 'next') => void;
	currentPage: number;
};

const PaginationButtons = ({ totalPages, onClickDirection, currentPage }: Props) => {
	return (
		<Container>
			<button onClick={() => onClickDirection('previous')}>Anterior</button>
			<span>{`${currentPage} de ${totalPages}`}</span>
			<button onClick={() => onClickDirection('next')}>Próximo</button>
		</Container>
	);
};

export default PaginationButtons;
