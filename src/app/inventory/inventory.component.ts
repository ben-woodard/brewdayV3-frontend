import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserServiceService } from '../services/user-service.service';
import { OverlayServiceService } from '../services/overlay-service.service';
import { Ingredient } from '../interfaces/Ingredient';
import { InventoryServiceService } from '../services/inventory-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  user : User | null = null;
  formVisible : Boolean = false;
  ingredients : Ingredient[] = [];
  ingredient : Ingredient | null = null;

  constructor(
    private userService: UserServiceService,
    private overlayService: OverlayServiceService,
    private inventoryService: InventoryServiceService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

    this.userService.userObservable.subscribe(user => this.user = user);
    if (!this.user) {
      this.router.navigate(['/'])
    }

    this.getAllIngredientsByUser(this.user?.id);

  }

  openIngredientForm() {
    this.overlayService.showOverlay();
  }

  getAllIngredientsByUser(userId: number | undefined) {
    this.inventoryService.getAllIngredientsByUser(userId).subscribe(
      (data: Ingredient[])=> {
        this.ingredients = data;
        console.log(this.ingredients)
      },
      error => {
        console.log(error);
      }
    )
  }

  setSelectedIngredient(selectedIngredient : Ingredient | null) {
    if(selectedIngredient) {
      console.log(this.setSelectedIngredient)
      this.ingredient = selectedIngredient;
      this.openIngredientForm()
    }
  }

  deleteIngredient(ingredientId : number) {
   console.log("In parent component delete ingredient")
   this.inventoryService.deleteIngredient(ingredientId).subscribe(
    response => {
      console.log(response)
      this.reloadInventory()
    },
    error => {
      console.log(error)
    }
  )
  }

  reloadInventory() {
    this.getAllIngredientsByUser(this.user?.id);
  }

}
