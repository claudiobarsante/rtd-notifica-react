import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// -- Components
import ActivityIndicator from 'components/ActivityIndicator';
import ClearButton from 'components/notificacao/ClearButton';
import FilterButton from 'components/notificacao/FilterButton';
import { NotificacaoItem } from 'components/notificacao/NotificacaoCard';
import NotificacaoSearch from 'components/notificacao/Search';
import PaginationActions from 'components/Pagination';
import SessionExpired from 'components/Modal/Session-Expired';
// -- Hooks
import { useAuth } from 'hooks/useAuth';
import { Notificacao, useNotificacao } from 'hooks/use-Notificacao';
// -- Styles
import * as S from './styles';
// -- Images
import multiImg from 'assets/multi-transp.png';
// -- Logic
import { Pagination, Search, Filters, Directions } from './logic';
// -- Types
import { ResponseCode } from 'types/response';

const FIRST_PAGE = 1;

const Overview = () => {
  // -- State
  const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [recordsPerPage] = useState<number>(4);
  const [page, setPage] = useState<Notificacao[]>([]);

  const [inputText, setInputText] = useState('');
  // -- Hooks
  const {
    getTodasNotificacoesByOficioId,
    resetError,
    isLoading,
    filteredNotificacoes,
    updateFilteredNotificacoes,
    resetFilteredNotificacoes,
    todasNotificacoes,
    error
  } = useNotificacao();
  const { currentUser, resetUserState } = useAuth();

  useEffect(() => {
    getTodasNotificacoesByOficioId(currentUser.oficioId);
  }, [currentUser.oficioId, getTodasNotificacoesByOficioId]);

  const loadRecordsToPage = useCallback(
    (currentPage: number) => {
      const records = Pagination.getRecordsPerPage(
        filteredNotificacoes,
        currentPage,
        recordsPerPage
      );
      setPage(records);
    },
    [filteredNotificacoes, recordsPerPage]
  );

  useEffect(() => {
    const countPages = Pagination.getTotalNumberOfPages(
      filteredNotificacoes.length,
      recordsPerPage
    );
    setTotalPages(countPages);
    if (totalPages) loadRecordsToPage(FIRST_PAGE);
  }, [
    filteredNotificacoes.length,
    loadRecordsToPage,
    recordsPerPage,
    totalPages
  ]);

  const handleSelectPage = useCallback(
    (direction: Directions) => {
      let newPage = Pagination.selectPage(
        currentPage,
        direction,
        filteredNotificacoes.length
      );
      if (newPage === currentPage) return;

      loadRecordsToPage(newPage);
      setCurrentPage(newPage);
    },
    [currentPage, filteredNotificacoes.length, loadRecordsToPage]
  );

  //todo: add _.debounce
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
    const filtered = Search.filterNotificacoes(text, filteredNotificacoes);
    updateFilteredNotificacoes(filtered);
  };

  const handleClear = useCallback(() => {
    setInputText('');
    resetFilteredNotificacoes();
  }, [resetFilteredNotificacoes]);

  const handleFilter = useCallback(
    (filter: Filters) => {
      const filtered = Search.filterNotificacoesByDiasEmAtraso(
        todasNotificacoes,
        filter
      );

      updateFilteredNotificacoes(filtered);
    },
    [todasNotificacoes, updateFilteredNotificacoes]
  );

  const handleCloseModal = useCallback(() => {
    resetUserState();
    resetError();
    return <Redirect to="/" />;
  }, [resetError, resetUserState]);

  const { code, message } = error;

  if (code === ResponseCode.UNAUTHORIZED) {
    return (
      <SessionExpired message={message} onButtonClick={handleCloseModal} />
    );
  }

  return (
    <S.Container>
      <S.Left>
        <img
          src={multiImg}
          alt="Figura simulando um homem fazendo  v??rias coisas"
        />
      </S.Left>
      <S.TopRight>
        <S.SearchAndFilterContainer>
          <NotificacaoSearch text={inputText} onHandleChange={handleChange} />
          <ClearButton onClick={handleClear} />
          <FilterButton onFilter={handleFilter} />
        </S.SearchAndFilterContainer>
      </S.TopRight>
      <S.Right>
        {isLoading && <ActivityIndicator isLoading={isLoading} />}
        {page &&
          page.map((notificacao) => (
            <NotificacaoItem
              key={notificacao.notificadoId}
              notificacaoDetails={notificacao}
            />
          ))}
      </S.Right>
      <S.Pagination>
        <PaginationActions
          totalPages={totalPages}
          onClickDirection={handleSelectPage}
          currentPage={currentPage}
        />
      </S.Pagination>
    </S.Container>
  );
};

export default Overview;
