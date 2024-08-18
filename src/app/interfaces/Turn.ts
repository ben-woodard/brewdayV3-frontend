import { Batch } from "./Batch";
import { Product } from "./Product";

export interface Turn{
  turnId: number,
  turnNumber: number,
  recipeId: number,
  batch: Batch,
  product: Product
}
