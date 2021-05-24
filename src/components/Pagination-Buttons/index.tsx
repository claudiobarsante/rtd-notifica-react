import { Container } from './styles';
import { PaginationDirection, Direction } from 'pages/Overview/logic';

type Props = {
	totalPages: number;
	onClickDirection: (direction: PaginationDirection) => void;
	currentPage: number;
};

const PaginationButtons = ({ totalPages, onClickDirection, currentPage }: Props) => {
	return (
		<Container>
			<button onClick={() => onClickDirection({ pageToGo: Direction.PREVIOUS })}>Anterior</button>
			<span>{`${currentPage} de ${totalPages}`}</span>
			<button onClick={() => onClickDirection({ pageToGo: Direction.NEXT })}>Próximo</button>
		</Container>
	);
};

export default PaginationButtons;
