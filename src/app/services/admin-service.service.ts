import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import BASE_URL from '../URL';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers() {
    return this.http.get<User[]>(`${BASE_URL}/admin`, { withCredentials: true });
  }
}
