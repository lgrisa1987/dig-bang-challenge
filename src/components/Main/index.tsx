import { useContext } from 'react';
import { Context } from '../Context';
import { Header, Body, Footer, Button, Table } from '../';
import './index.scss';

const Main = () => {
  const {
    state: { rotateMain },
  } = useContext(Context);

  return (
    <section className={`main${rotateMain ? ' main--rotate' : ''}`}>
      <div className='main__front'>
        <Header />
        <Body />
        <Footer />
      </div>
      <div className='main__back'>
        <Table />
        <Button className='primary btn--back'>Volver</Button>
      </div>
      <div className='main__right'></div>
    </section>
  );
};

export default Main;
