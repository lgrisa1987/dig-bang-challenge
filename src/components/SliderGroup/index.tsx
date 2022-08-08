import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import { SliderProps, ChangeEventHandlerType } from '../../types';
import './style.scss';

export const toCurrency: (number: number) => string = (number) =>
  number.toLocaleString('es-ES').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const SliderGroup = ({ values }: SliderProps) => {
  const { state, dispatch } = useContext(Context);
  const {
    label,
    inputAttr,
    inputAttr: { min, max, maxLength },
    currency,
  } = values;

  const changeEventHandler: ChangeEventHandlerType = (e) => {
    const value: number = Number(e.target.value.replace(/\D/g, ''));
    const maxValue: number | null = value > max ? max : null;
    dispatch({
      type: values.id,
      payload: maxValue ?? value,
    });
  };

  useEffect(() => {
    dispatch({
      type: 'setInvalid',
      payload: state.montoTotal >= 5000 && state.plazo >= 3 ? false : true,
    });
  }, [state[values.id]]);

  return (
    <div className='slider-group'>
      <div className='slider-group__label-container'>
        <label className='slider-group__label'>{label}</label>
        <input
          type='text'
          className='slider-group__number'
          maxLength={maxLength}
          value={(currency ?? '') + toCurrency(state[values.id])}
          onChange={changeEventHandler}
        />
      </div>
      <div className='slider-group__range-container'>
        <input
          type='range'
          {...inputAttr}
          className='slider-group__range'
          value={state[values.id]}
          onChange={changeEventHandler}
        />
        <div className='slider-group__values-container'>
          {[min, max].map((value, i: number) => (
            <span key={i} className='slider-group__value'>
              {currency}
              {toCurrency(value)}
            </span>
          ))}
        </div>
        {state[values.id] < min && (
          <p className='slider-group__error-message'>
            El {label} mínimo debe ser de {currency}
            {toCurrency(min)}.
          </p>
        )}
      </div>
    </div>
  );
};

export default SliderGroup;
