import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  user: User | null = null;
  userIsAdmin: boolean = false;
  constructor(
    private userService: UserServiceService,
  ) {}

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => this.user = user);
    if(this.user && this.user?.authorities?.some(auth => auth.authority === 'ROLE_ADMIN')) {
      this.userIsAdmin = true;
    }

  }

  handleLogout() {

  }

}
