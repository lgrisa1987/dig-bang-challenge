import { createContext, useReducer } from 'react';
import { InitialStateProps, ChildrenProps, ContextProps } from '../../types';
import { reducer } from './reducer';

const initialState: InitialStateProps = {
  montoTotal: 5000,
  plazo: 3,
  cuotaFija: Number((5000 / 3).toFixed(2)),
  invalid: false,
  rotateMain: false,
  slidersData: [
    {
      label: 'Monto total',
      id: 'montoTotal',
      inputAttr: {
        maxLength: 7,
        min: 5000,
        max: 50000,
      },
      currency: '$',
    },
    {
      label: 'Plazo',
      id: 'plazo',
      inputAttr: {
        maxLength: 2,
        min: 3,
        max: 24,
      },
    },
  ],
  tableData: ['Monto total', 'Plazo', 'Cuota fija por mes'],
};

export const Context = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

const ContextProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
