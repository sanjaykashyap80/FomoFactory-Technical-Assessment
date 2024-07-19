import { Router } from 'express';
import Data from '../models/Data';

const router = Router();

router.get('/data', async (req, res) => {
  try {
    const data = await Data.find().sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

router.get('/data/:symbol', async (req, res) => {
  const { symbol } = req.params;
  try {
    const data = await Data.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

export default router;
