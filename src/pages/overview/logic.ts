import { Notificacao } from 'hooks/use-notificacao';
import filter from 'lodash/filter';

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

	static selectPage(currentPage: number, direction: 'previous' | 'next', totalPages: number) {
		let newPage = 0;
		if (direction === 'previous') {
			if (currentPage === 1) return;
			newPage = currentPage - 1;
		}

		if (direction === 'next') {
			if (currentPage === totalPages) return;
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
}
