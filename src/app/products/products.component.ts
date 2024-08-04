import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  user : User | null =  null;

  constructor(
    private userService : UserServiceService,
  ){}

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => this.user = user);
  }

  openProductForm() {
    
  }

}
