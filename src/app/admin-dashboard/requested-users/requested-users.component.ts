import { Component, input, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/User';
import { CompanyServiceService } from '../../services/company-service.service';
import { AdminServiceService } from '../../services/admin-service.service';
import { Company } from '../../interfaces/Company';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-requested-users',
  templateUrl: './requested-users.component.html',
  styleUrl: './requested-users.component.css'
})
export class RequestedUsersComponent implements OnInit {
  unableToAddUser: boolean = false
  company: Company | null = null
  users: User[] = []
  noRequestedUsers: boolean = false
  companyRequestedUsers: User[] | undefined = []
  @Output() updateUserList: EventEmitter<void> = new EventEmitter<void>()

  constructor(
    private companyService: CompanyServiceService,
    private adminService: AdminServiceService
  ) { }

  ngOnInit(): void {
    this.getRequestedUsers();
  }

  getRequestedUsers() {
    this.companyService.companyObservable.subscribe(company => this.company = company)
    if (this.company) {
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

  addUserToCompany(userId: number | undefined) {
    console.log("companyId: " + this.company?.companyId)
    if (userId && this.company?.companyId) {
      this.adminService.addUserToCompany(userId, this.company?.companyId).subscribe(
        response => {
          console.log(response)
          this.getRequestedUsers()
          this.updateUserList.emit()
        },
        error => {
          console.log(error)
        }
      )
    } else {
      this.unableToAddUser = true
    }
  }

}
