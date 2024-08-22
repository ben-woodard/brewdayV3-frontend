import { Company } from "./Company";
import { Order } from "./Order";
import { Recipe } from "./Recipe";
import { User } from "./User";

export interface Ingredient {
  ingredientId: number | null,
  ingredientName: string,
  recipes: Recipe | null,
  orders: Order | null,
  amountInStock: number,
  orderingThreshold: number,
  ingredientType: string,
  unitOfMeasurement: string,
  company: Company | null
}
