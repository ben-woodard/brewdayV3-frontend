export interface Ingredient {
  ingredientId: number | null,
  ingredientName: string,
  amountInStock: number,
  orderingThreshold: number,
  ingredientType: string,
  unitOfMeasurement: string
}
