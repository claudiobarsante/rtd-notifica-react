import { createContext, useContext, useState, useCallback } from 'react';
import { ResponseError } from 'types/response';

export type ErrorState = {
  error: ResponseError;
};

export type ErrorContextData = {
  error: ResponseError;
  setError: (error: ResponseError) => void;
  resetError: () => void;
};
export const ErrorContext = createContext<ErrorContextData>(
  {} as ErrorContextData
);

export type ErrorProviderProps = {
  children: React.ReactNode;
};

const INITIAL_STATE: ErrorState = {
  error: { code: 0, message: '' }
};

const ErrorProvider = ({ children }: ErrorProviderProps) => {
  const [data, setData] = useState<ErrorState>(INITIAL_STATE);

  const setError = (err: ResponseError) => {
    const { code, message } = err;
    setData(data => ({ ...data, error: { code, message } }));
  };

  const resetError = () => {
    setData(data => ({ ...data, error: { code: 0, message: '' } }));
  };

  return (
    <ErrorContext.Provider value={{ error: data.error, setError, resetError }}>
      {children}
    </ErrorContext.Provider>
  );
};

const useError = () => useContext(ErrorContext);

export { ErrorProvider, useError };
