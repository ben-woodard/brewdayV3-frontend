import { Component, Input, Output } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';
import { User } from '../../interfaces/User';
import { Company } from '../../interfaces/Company';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  usersAvaliable: boolean = false;
  user: User | null = null
  @Input() companyUsers: User[] = []
  @Output() refreshUsers: EventEmitter<void> = new EventEmitter<void>()
  company: Company | null = null


  constructor(
    private adminService: AdminServiceService,
  ) { }

  makeAdmin(id: number | undefined) {
    this.adminService.makeAdmin(id).subscribe(
      response => {
        this.refreshUsers.emit()
      },
      error => {
        console.log(error)
      }
    )
  }

  getUserRole(user: User) {
    return user.authorities?.some(auth => auth.authority === 'ROLE_ADMIN') ? 'Admin' : 'User';
  }

  isUserRole(user: User): boolean | undefined {
    return user.authorities?.some(auth => auth.authority === 'USER');
}

}








