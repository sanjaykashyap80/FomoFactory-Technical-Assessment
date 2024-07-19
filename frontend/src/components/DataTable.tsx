import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/actions';
import { selectData } from '../store/selectors';
import { RootState, AppDispatch } from '../store';

const DataTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => selectData(state));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => (
          <tr key={item._id}>
            <td>{item.symbol}</td>
            <td>{item.price}</td>
            <td>{new Date(item.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
