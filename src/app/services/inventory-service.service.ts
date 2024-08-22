import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASE_URL from '../URL';
import { Ingredient } from '../interfaces/Ingredient';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(
    private http: HttpClient
  ) { }

  createIngredient(userId: number | undefined, ingredient: Ingredient) {
    return this.http.post(`${BASE_URL}/inventory/${userId}/create`, ingredient)
  }

  getAllIngredientsByCompany(companyId: number | undefined): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${BASE_URL}/inventory/${companyId}`);
  }
  updateIngredient(ingredient: Ingredient , ingredientId : number | null){
    return this.http.patch<Ingredient>(`${BASE_URL}/inventory/${ingredientId}`, ingredient);
  }

  deleteIngredient(ingredientId: number | null) {
    return this.http.delete<Ingredient>(`${BASE_URL}/inventory/${ingredientId}`);
  }

}

