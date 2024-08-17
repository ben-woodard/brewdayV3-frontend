import { Component, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/User';
import { AdminServiceService } from '../services/admin-service.service';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../services/company-service.service';
import { Company } from '../interfaces/Company';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  user: User | null = null
  company: Company | null = null
  companyUsers: User[] = []

  constructor(
    private adminService: AdminServiceService,
    private userService: UserServiceService,
    private router: Router,
    private companyService: CompanyServiceService,
  ) { }

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => this.user = user);
    this.getCompanyUsers();


  }

  getCompanyUsers() {
    this.companyService.companyObservable.subscribe(company => this.company = company);
    if (this.company) {
      this.adminService.getAllUsersByCompany(this.company.companyId).subscribe(
        response => {
          this.companyUsers = response
        },
        error => {
          console.log(error)
        }
      )
    }
  }

}
