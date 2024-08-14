import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { AdminServiceService } from '../services/admin-service.service';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
  user: User | null = null
  userIsAdmin: boolean = false

  constructor(
    private adminService: AdminServiceService,
    private userService: UserServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.userService.userObservable.subscribe(user => this.user = user);
    // if(this.user && this.user?.authorities?.some(auth => auth.authority === 'ROLE_ADMIN')) {
    //   this.userIsAdmin = true;
    //   this.adminService.getAllUsers().subscribe(
    //     response => {
    //       console.log(response)
    //     },
    //     error => {
    //       console.log(error)
    //     }
    //   )
    // } else {
    //   this.router.navigate(['/'])
    // }
  }

}
