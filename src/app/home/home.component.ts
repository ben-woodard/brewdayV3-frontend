import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  user: User | null = null

  constructor(
    private userService: UserServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => this.user = user);
    if (!this.user) {
      this.router.navigate(['/'])
    }
  }

}
