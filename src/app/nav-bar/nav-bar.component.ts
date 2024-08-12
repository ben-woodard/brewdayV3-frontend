import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../services/user-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  user: User | null = null;
  userIsAdmin: boolean = false;
  usersList : User[] = [];
  constructor(
    private userService: UserServiceService,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => this.user = user);
    if(this.user && this.user?.authorities?.some(auth => auth.authority === 'ROLE_ADMIN')) {
      this.userIsAdmin = true;
    }
  }

  handleLogout() {
    this.userService.setUser(null)
    this.cookieService.deleteAll()
    this.router.navigate(['/'])
  }

}
