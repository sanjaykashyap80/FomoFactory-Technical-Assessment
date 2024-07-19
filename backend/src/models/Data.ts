import { Schema, model } from 'mongoose';

interface IData {
  symbol: string;
  price: number;
  timestamp: Date;
}

const dataSchema = new Schema<IData>({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Data = model<IData>('Data', dataSchema);

export default Data;
