import React from 'react';
import { Container } from './styles';

interface Props {
	totalPages: number;
	onPreviousClick(currentPage: number): void;
	onNextClick(currentPage: number): void;
	currentPage: number;
}

const Pagination = ({ totalPages, onPreviousClick, onNextClick, currentPage }: Props) => {
	return (
		<Container>
			<button onClick={() => onPreviousClick(currentPage)}>Anterior</button>
			<span>{`pagina atual ${currentPage} de ${totalPages}`}</span>
			<button onClick={() => onNextClick(currentPage)}>Próximo</button>
		</Container>
	);
};

export default Pagination;
