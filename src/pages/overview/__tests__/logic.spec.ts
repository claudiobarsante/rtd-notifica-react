import { Notificacao } from 'hooks/use-notificacao';
import { Pagination } from '../logic';
import { data } from '../../../helpers/mock/data';

describe('Testing Pagination class methods', () => {
	it('should be able to return the right number of total pages to show all records', () => {
		const LENGTH = 100;
		const RECORDS_PER_PAGE = 5;
		const countPages = Pagination.getTotalNumberOfPages(LENGTH, RECORDS_PER_PAGE);

		expect(countPages).toBe(20);
	});

	it('should be able to get the right records for the current page', () => {
		const ALL_RECORDS: Notificacao[] = data;
		const CURRENT_PAGE = 1;
		const RECORDS_PER_PAGE = 2;

		const MOCK_RESULT = [
			{
				bairro: 'MUTUÁ',
				diasEmAtraso: 516,
				endereco: 'ETR DA CONCEICAO, nº 796, BL A CASA 5, MUTUAPIRA, SAO GONCALO/RJ CEP 24461390',
				latitude: '-22.8065778',
				logradouro: 'ESTRADA COVANCA DA CONCEIÇÃO',
				longitude: '-43.03702819999999',
				nome: 'JOSE NERI ESTEVES DE FREITAS',
				notificacaoId: 3162,
				notificadoId: 4412,
				numero: '796',
				protocolo: '271594',
			},
			{
				bairro: 'COLUBANDE',
				diasEmAtraso: 516,
				endereco: 'ETR DOS MENEZES 400 AP 1702 ALCANTARA SAO GONCALO RJ 24451230',
				latitude: '-22.8222835',
				logradouro: 'ESTRADA DOS MENEZES',
				longitude: '-43.0072058',
				nome: 'SOLANGE DE SOUZA MESQUITA',
				notificacaoId: 3164,
				notificadoId: 4415,
				numero: '400',
				protocolo: '271596',
			},
		];

		const records = Pagination.getRecordsPerPage(ALL_RECORDS, CURRENT_PAGE, RECORDS_PER_PAGE);

		expect(records).toEqual(MOCK_RESULT);
		expect(records.length).toBe(2);
	});

	it('should be able to select the next page', () => {
		const CURRENT_PAGE = 1;
		const DIRECTION = 'next';
		const TOTAL_PAGES = 50;

		const newPage = Pagination.selectPage(CURRENT_PAGE, DIRECTION, TOTAL_PAGES);
		expect(newPage).toEqual(2);
	});

	it('should be able to stay on the same page, because the current page is equal to the last one', () => {
		const CURRENT_PAGE = 50;
		const DIRECTION = 'next';
		const TOTAL_PAGES = 50;

		const newPage = Pagination.selectPage(CURRENT_PAGE, DIRECTION, TOTAL_PAGES);
		expect(newPage).toEqual(50);
	});

	it('should be able to select the previous page', () => {
		const CURRENT_PAGE = 2;
		const DIRECTION = 'previous';
		const TOTAL_PAGES = 50;

		const newPage = Pagination.selectPage(CURRENT_PAGE, DIRECTION, TOTAL_PAGES);
		expect(newPage).toEqual(1);
	});

	it('should be able to stay on the same page, because the current page is equal to the first page', () => {
		const CURRENT_PAGE = 1;
		const DIRECTION = 'previous';
		const TOTAL_PAGES = 50;

		const newPage = Pagination.selectPage(CURRENT_PAGE, DIRECTION, TOTAL_PAGES);
		expect(newPage).toEqual(1);
	});
});
