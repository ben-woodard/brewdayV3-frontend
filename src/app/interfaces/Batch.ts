import { Product } from "./Product";
import { Turn } from "./Turn";

export interface Batch {
  batchId: number,
  batchNumber: number,
  numberOfTurns: number,
  startDate: Date,
  endDate: Date,
  turnsComplete: boolean,
  batchComplete: boolean,
  product: Product,
  turns: Turn
}
