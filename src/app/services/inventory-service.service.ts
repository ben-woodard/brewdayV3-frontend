import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(
    private http: HttpClient
  ) { }

  // createIngredient() {
  //   return this.http.post<SignUpRequest>(BASE_URL + "/register", signUpRequest)
  // }
}

