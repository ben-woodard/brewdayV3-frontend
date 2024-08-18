import { Ingredient } from "./Ingredient";
import { Order } from "./Order";
import { Product } from "./Product";
import { User } from "./User";

export interface Company {
  companyId: number,
  companyName: string,
  users: User[],
  ingredients: Ingredient[],
  orders: Order[],
  products: Product[],
  requestedUsers: User[]
}
