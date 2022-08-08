import { useContext } from 'react';
import { Context } from './Context';
import { SingleSlider } from '../types';
import { SliderGroup } from './';

const Body = () => {
  const {
    state: { slidersData },
  } = useContext(Context);
  return (
    <div className='main__body'>
      {slidersData.map((sliderProps: SingleSlider, i: number) => (
        <SliderGroup key={i} values={sliderProps} />
      ))}
    </div>
  );
};

export default Body;
