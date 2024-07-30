import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../services/user-service.service';
import { OverlayServiceService } from '../services/overlay-service.service';
import { Ingredient } from '../interfaces/Ingredient';
import { InventoryServiceService } from '../services/inventory-service.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  user : User | null = null;
  formVisible : Boolean = false;
  ingredients : Ingredient[] = [];

  constructor(
    private userService: UserServiceService,
    private overlayService: OverlayServiceService,
    private inventoryService: InventoryServiceService,
  ) {

  }

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => this.user = user);

    this.inventoryService.getAllIngredientsByUser(this.user?.id).subscribe(
      (data: Ingredient[])=> {
        this.ingredients = data;
        console.log(this.ingredients)
      },
      error => {
        console.log(error);
      }
    )
  }

  openIngredientForm() {
    this.overlayService.showOverlay();
  }

  addInventoryItem() {

  }

}
