import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../services/user-service.service';
import { OverlayServiceService } from '../services/overlay-service.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  user : User | null = null;
  formVisible : Boolean = false;

  constructor(
    private userService: UserServiceService,
    private overlayService: OverlayServiceService
  ) {

  }

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => this.user = user);
  }

  openIngredientForm() {
    this.overlayService.showOverlay();
  }

  addInventoryItem() {

  }

}
