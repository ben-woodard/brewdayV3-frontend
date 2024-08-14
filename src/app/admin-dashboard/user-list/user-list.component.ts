import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  usersAvaliable: boolean = false;
  users: User[] = []


  constructor(
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
      this.adminService.getAllUsers().subscribe(
        response => {
          if(response){
            this.usersAvaliable = true;
            this.users = response
            for(let user of this.users) {
              console.log(user.authorities)
            }
          }
        },
        error => {
          console.log(error)
        }
      )
  }

makeAdmin() {
  
}

}
