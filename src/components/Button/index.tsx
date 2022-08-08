import { useContext } from 'react';
import { Context } from '../Context';
import { ButtonProps } from '../../types';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import './index.scss';

const Button = ({ children, className, obtenerCredito }: ButtonProps) => {
  const {
    state: { invalid },
    dispatch,
  } = useContext(Context);

  const clickHandler: () => void = () => {
    if (obtenerCredito) {
      Swal.fire({
        icon: 'success',
        title: 'Solicitud confirmada',
        text: 'Crédito solicitado con éxito',
        confirmButtonText: 'Cerrar',
        backdrop: `rgba(10,83,139,0.6)`,
      } as SweetAlertOptions);
      dispatch({
        type: 'setResetValues',
        payload: {
          montoTotal: 5000,
          plazo: 3,
          invalid: false,
        },
      });
    } else dispatch({ type: 'setRotateMain' });
  };

  return (
    <button
      className={`btn btn--${className}${
        invalid && obtenerCredito ? ' btn--disabled' : ''
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
