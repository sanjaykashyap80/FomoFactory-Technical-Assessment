import React, { useState } from 'react';

interface StockSelectorProps {
  onChange: (symbol: string) => void;
}

const StockSelector: React.FC<StockSelectorProps> = ({ onChange }) => {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(symbol);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
        />
      <button type="submit">Change</button>
    </form>
  );
};

export default StockSelector;



// import React from 'react';

// const StockSelector: React.FC = () => {
//   return (
//     <div>
//       <h2>Select Stock or Crypto</h2>
//       
//     </div>
//   );
// };

// export default StockSelector;



