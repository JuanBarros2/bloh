import { ToogleProps, ToogleReturn } from './useToogle.d';
import { useCallback, useState } from 'react';
/**
 * Retorna um hook que alterna entre valores booleanos
 * @param initialState representa o valor inicial do estado.
 * @returns state - Estado atual do hook;
 * changeState - Função que alterna o valor do estado.
 */
const useToogle = (params: ToogleProps): ToogleReturn => {
  const [state, setState] = useState<boolean>(params.initialState ?? false)
  return {
    state, changeState: useCallback(
      () => {
        setState((state) => !state)
      },
      [setState],
    )
  }
};

export default useToogle;
