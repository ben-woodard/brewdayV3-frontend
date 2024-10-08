import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Company } from '../interfaces/Company';
import { HttpClient } from '@angular/common/http';
import BASE_URL from '../URL';
import { User } from '../interfaces/User';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  companySubject = new BehaviorSubject<Company | null>(null);
  companyObservable = this.companySubject.asObservable();


  constructor(
    private http: HttpClient,
  ) { }

  setCompany(company: Company) {
    this.companySubject.next(company);
  }

  getCompany() {
    return this.companySubject;
  }

}
