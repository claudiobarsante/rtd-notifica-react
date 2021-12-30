import { Notificacao } from 'hooks/use-Notificacao';
import filter from 'lodash/filter';

export type Directions = 'Previous' | 'Next';

export type Filters = 'All' | 'Before' | 'After';

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

  static selectPage(
    currentPage: number,
    direction: Directions,
    totalPages: number
  ) {
    let newPage = 0;
    if (direction === 'Previous') {
      if (currentPage === 1) return currentPage;
      newPage = currentPage - 1;
    }

    if (direction === 'Next') {
      if (currentPage === totalPages) return currentPage;
      newPage = currentPage + 1;
    }

    return newPage;
  }
}

export class Search {
  static filterNotificacoes(
    text: string,
    todasNotificacoes: Notificacao[]
  ): Notificacao[] {
    const formattedQuery = text.toLowerCase();

    const filtered = filter(todasNotificacoes, (notificacao) => {
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

  static filterNotificacoesByDiasEmAtraso(
    todasNotificacoes: Notificacao[],
    filter: Filters
  ): Notificacao[] {
    const daysLimit = process.env.REACT_APP_DAYS_LIMIT_TO_COMPLETE_TASK;
    const days = daysLimit ? parseInt(daysLimit, 10) : 0;

    let filtered: Notificacao[] = [];

    if (filter === 'All') filtered = [...todasNotificacoes];
    if (filter === 'Before') {
      filtered = todasNotificacoes.filter(
        (notificacao) => notificacao.diasEmAtraso <= days
      );
    }
    if (filter === 'After') {
      filtered = todasNotificacoes.filter(
        (notificacao) => notificacao.diasEmAtraso > days
      );
    }

    return filtered;
  }
}
