import { Container } from './styles';

type Props = {
	totalPages: number;
	onPreviousClick: () => void;
	onNextClick: () => void;
	currentPage: number;
};

const PaginationButtons = ({ totalPages, onPreviousClick, onNextClick, currentPage }: Props) => {
	return (
		<Container>
			<button onClick={() => onPreviousClick()}>Anterior</button>
			<span>{`${currentPage} de ${totalPages}`}</span>
			<button onClick={() => onNextClick()}>Próximo</button>
		</Container>
	);
};

export default PaginationButtons;
