import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  user : User | null = null;

  constructor(
    private userService: UserServiceService,
  ) {

  }

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => this.user = user);
  }

  addInventoryItem() {

  }

}
