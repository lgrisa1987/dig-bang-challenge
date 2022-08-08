import { useContext, useState, useEffect } from 'react';
import { Context } from './Context';
import { gsap } from 'gsap';
import { toCurrency } from './SliderGroup';
import { ButtonProps, PriceAnimationProps } from '../types';

import { Button } from './';

const btnsData: ButtonProps[] = [
  {
    children: 'Obtené crédito',
    className: 'success',
    obtenerCredito: true,
  },
  {
    children: 'Ver detalle de cuotas',
    className: 'primary',
  },
];

const roundDecimals = (places: number) => {
  const p = Math.pow(10, places || 0);
  return (value: number) => Math.round(value * p) / p;
};

const Footer = () => {
  const [onMounted, setOnMounted] = useState<boolean>(false);
  const { state, dispatch } = useContext(Context);
  const props: PriceAnimationProps = {
    cuotaFija: state.montoTotal / state.plazo,
    modifiers: {
      cuotaFija: roundDecimals(2),
    },
    duration: !onMounted ? 0 : 0.5,
    ease: 'power2',
    onUpdate: () => {
      dispatch({
        type: 'setCuotaFija',
        payload: state.cuotaFija,
      });
      setOnMounted(true);
    },
  };

  useEffect(() => {
    gsap.to(state, props);
  }, [state.montoTotal, state.plazo]);

  return (
    <div className='main__footer'>
      <h2 className='main__footer-headline'>
        <span className='main__footer-headline__title'>Cuota fija por mes</span>
        <span className='main__footer-headline__price'>
          $ {toCurrency(state.cuotaFija)}
        </span>
      </h2>
      <div className='main__footer-btn-container'>
        {btnsData.map((btn: ButtonProps, i: number) => (
          <Button
            key={i}
            className={btn.className}
            obtenerCredito={btn.obtenerCredito}
          >
            {btn.children}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
