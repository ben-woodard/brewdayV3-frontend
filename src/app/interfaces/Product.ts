import { Batch } from './Batch';
import { Company } from './Company';
import { Recipe } from './Recipe';
import { Turn } from './Turn';
export interface Product{
  productId: number,
  productName: string,
  defaultRecipeId: number,
  company: Company,
  recipes: Recipe[],
  batches: Batch[],
  selectedRecipe: string,
  turns: Turn[]
}
