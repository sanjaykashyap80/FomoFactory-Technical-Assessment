import axios from 'axios';
import Data from '../models/Data';

const fetchData = async () => {
  const symbols = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'bitcoin-cash'];
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbols.join(',')}&vs_currencies=usd`;
  
  try {
    const response = await axios.get(url);
    symbols.forEach(async (symbol) => {
      const price = response.data[symbol].usd;
      const data = new Data({ symbol, price });
      await data.save();
      console.log(`Saved data for ${symbol}: $${price}`);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;
