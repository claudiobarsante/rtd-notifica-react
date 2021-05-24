import { Notificacao } from 'hooks/use-notificacao';
import filter from 'lodash/filter';

export enum Direction {
	PREVIOUS = 'previous',
	NEXT = 'next',
}

export type PaginationDirection = {
	pageToGo: Direction.PREVIOUS | Direction.NEXT;
};

export class Pagination {
	static getTotalNumberOfPages(length: number, recordsPerPage: number) {
		const countPages = Math.ceil(length / recordsPerPage);
		return countPages;
	}

	static getRecordsPerPage(
		allRecords: Notificacao[],
		currentPage: number,
		recordsPerPage: number
	): Notificacao[] {
		const startIdx = (currentPage - 1) * recordsPerPage;

		let endIdx = startIdx + recordsPerPage;

		let records = [];
		if (endIdx >= allRecords.length - 1) {
			records = allRecords.slice(startIdx);
		} else {
			records = allRecords.slice(startIdx, endIdx);
		}

		return records;
	}

	static selectPage(currentPage: number, direction: PaginationDirection, totalPages: number) {
		let newPage = 0;
		if (direction.pageToGo === Direction.PREVIOUS) {
			if (currentPage === 1) return currentPage;
			newPage = currentPage - 1;
		}

		if (direction.pageToGo === Direction.NEXT) {
			if (currentPage === totalPages) return currentPage;
			newPage = currentPage + 1;
		}

		return newPage;
	}
}

export class Search {
	static filterNotificacoes(text: string, todasNotificacoes: Notificacao[]): Notificacao[] {
		const formattedQuery = text.toLowerCase();

		const filtered = filter(todasNotificacoes, notificacao => {
			if (
				notificacao.protocolo.includes(formattedQuery) ||
				notificacao.nome.toLowerCase().includes(formattedQuery) ||
				notificacao.endereco.toLowerCase().includes(formattedQuery)
			) {
				return true;
			}
			return false;
		});

		return filtered;
	}
	//todo: refactor filter type
	static filterNotificacoesByDiasEmAtraso(
		todasNotificacoes: Notificacao[],
		filter: 'all' | 'before' | 'after'
	): Notificacao[] {
		const daysLimit = process.env.REACT_APP_DAYS_LIMIT_TO_COMPLETE_TASK;
		const days = daysLimit ? parseInt(daysLimit, 10) : 0;

		let filtered: Notificacao[] = [];

		if (filter === 'all') {
			filtered = [...todasNotificacoes];
		} else if (filter === 'before') {
			filtered = todasNotificacoes.filter(notificacao => notificacao.diasEmAtraso <= days);
		} else if (filter === 'after') {
			console.log('passei after');
			filtered = todasNotificacoes.filter(notificacao => notificacao.diasEmAtraso > days);
		}

		return filtered;
	}
}
