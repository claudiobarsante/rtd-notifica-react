import { Container } from './styles';

type Props = {
	totalPages: number;
	onPreviousClick: (currentPage: number) => void;
	onNextClick: (currentPage: number) => void;
	currentPage: number;
};

const PaginationButtons = ({ totalPages, onPreviousClick, onNextClick, currentPage }: Props) => {
	return (
		<Container>
			<button onClick={() => onPreviousClick(currentPage)}>Anterior</button>
			<span>{`${currentPage} de ${totalPages}`}</span>
			<button onClick={() => onNextClick(currentPage)}>Próximo</button>
		</Container>
	);
};

export default PaginationButtons;
