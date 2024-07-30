import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASE_URL from '../URL';
import { Ingredient } from '../interfaces/Ingredient';

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

  getAllIngredientsByUser(userId: number | undefined) {
    return this.http.get<Ingredient[]>(`${BASE_URL}/inventory/${userId}`);
  }
}

