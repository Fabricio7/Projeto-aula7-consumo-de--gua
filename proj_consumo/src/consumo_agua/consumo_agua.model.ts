import { Schema, Document } from 'mongoose';

export interface ConsumoAgua extends Document {
  userId: string;
  quantidade: number;
  data: Date;
}

export const ConsumoAguaSchema = new Schema({
  userId: { type: String, required: true },
  quantidade: { type: Number, required: true },
  data: { type: Date, required: true },
});
