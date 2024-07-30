import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userSubject = new BehaviorSubject<User | null>(null);
  userObservable = this.userSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  setUser(user: User) {
    this.userSubject.next(user)
  }
}
