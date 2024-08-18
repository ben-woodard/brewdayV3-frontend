import { Component, input, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { CompanyServiceService } from '../../services/company-service.service';
import { AdminServiceService } from '../../services/admin-service.service';
import { Company } from '../../interfaces/Company';

@Component({
  selector: 'app-requested-users',
  templateUrl: './requested-users.component.html',
  styleUrl: './requested-users.component.css'
})
export class RequestedUsersComponent implements OnInit{
  company: Company | null = null;
  noRequestedUsers: boolean = false;
companyRequestedUsers: User[] | undefined = []

 constructor(
  private companyService: CompanyServiceService,
  private adminService: AdminServiceService
 ){}

  ngOnInit(): void {


    // console.log(this.companyRequestedUsers)

    this.companyService.companyObservable.subscribe(company => this.company = company)
    if(this.company) {
      this.adminService.getAllRequestedUsers(this.company.companyId).subscribe(
          response => {
            this.companyRequestedUsers = response;
          },
          error => {
            console.log(error)
          }
      )

    }
  }

  addUserToCompany(user: User) {

  }

}
