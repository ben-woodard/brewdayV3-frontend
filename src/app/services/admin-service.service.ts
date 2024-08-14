import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import BASE_URL from '../URL';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/admin`);
  }

  makeAdmin(userId: number | undefined): Observable<User> {
    return this.http.post<User>(`${BASE_URL}/admin/makeAdmin/${userId}`, null);
  }
}
