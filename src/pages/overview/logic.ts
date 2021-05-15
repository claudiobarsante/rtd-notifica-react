import { Notificacao } from 'hooks/use-notificacao';
import _ from 'lodash';

export class Pagination {
	static getTotalNumberOfPages(length: number, recordsPerPage: number) {
		const countPages = Math.ceil(length / recordsPerPage);
		return countPages;
	}

	static getRecordsPerPage(
		currentPage: number,
		recordsPerPage: number,
		allRecords: Notificacao[]
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
}

export class Search {
	static filterNotificacoes(text: string, todasNotificacoes: Notificacao[]): Notificacao[] {
		const formattedQuery = text.toLowerCase();

		const filtered = _.filter(todasNotificacoes, notificacao => {
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
