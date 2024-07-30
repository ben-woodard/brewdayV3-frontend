import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASE_URL from '../URL';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(
    private http: HttpClient
  ) { }

  createIngredient() {
    return this.http.post<SignUpRequest>(BASE_URL + "/register", signUpRequest)
  }
}

