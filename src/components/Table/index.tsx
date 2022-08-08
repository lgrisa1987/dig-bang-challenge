import { useContext } from 'react';
import { Context } from '../Context';
import { toCurrency } from '../SliderGroup';
import './index.scss';

const Table = () => {
  const {
    state: { tableData, montoTotal, plazo, cuotaFija },
  } = useContext(Context);
  return (
    <table className='table'>
      <thead className='table__head'>
        <tr>
          {tableData.map((th: string, i: number) => (
            <th key={i}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {[montoTotal, plazo, cuotaFija].map((value: number, i: number) => (
            <td key={i}>
              {i !== 1 && '$ '}
              {toCurrency(value)}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
