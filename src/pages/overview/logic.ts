import { Notificacao } from 'hooks/use-notificacao';

export class Pagination {
	constructor() {}

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
