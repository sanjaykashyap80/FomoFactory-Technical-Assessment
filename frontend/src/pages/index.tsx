import React from 'react';
import DataTable from '../components/DataTable';
import StockSelector from '../components/StockSelector';

const Home: React.FC = () => {
  return (
    <div>
      <StockSelector />
      <DataTable />
    </div>
  );
};

export default Home;